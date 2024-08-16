import ts, { factory } from "typescript";
import { UnitOfMeasure } from "../Definitions/Global/UOM.js";
import { Family } from "../ISY.js";
import {
  NodeClassDefinition,
  DriverDefinition,
  ParameterDefinition,
  CommandDefinition,
  DataTypeDefinition,
} from "../Model/ClassDefinition.js";
import { EnumDefinitionMap } from "../Model/EnumDefinition.js";
import type { Driver } from "../Definitions/Global/Drivers.js";

// #region Type aliases (1)

type GeneratedNodeClass<T extends Family> = {
  family: T;
  name: string;
  id: string;
  path: string;
  statements: (ts.ImportDeclaration | ts.VariableStatement | ts.TypeAliasDeclaration | ts.ClassDeclaration | ts.ExpressionStatement | ts.ModuleDeclaration)[];
};

// #endregion Type aliases (1)

// #region Classes (1)

export class NodeClassFactory {
  // #region Public Methods (2)

  public generateAll(): { family: Family; path: string; statements: ts.Statement[]; }[] {
    let modules = [];
    for (const family of NodeClassDefinition.Map.keys()) {
      var t = this.generateClassesForFamily(family);
      modules.push(buildClassIndex(family, t));
    }
    return modules;
  }

  public generateClassesForFamily<T extends Family>(family: T): GeneratedNodeClass<T>[] {
    return buildNodeClasses<T>(NodeClassDefinition.Map.get(family) as { [x: string]: NodeClassDefinition<T>; });
  }

  // #endregion Public Methods (2)
}

// #endregion Classes (1)

// #region Functions (14)

function buildClassIndex<T extends Family>(family: T, classes: GeneratedNodeClass<T>[]) {
  return {
    family,
    path: `/${Family[family]}/Generated/index.ts`,
    statements: [
      ...classes.map((p) =>
        factory.createExportDeclaration(
          undefined,
          false,
          undefined,
          factory.createStringLiteral(`./${p.name}.js`),
          undefined
        )
      ),
    ],
  };
}

export function buildNodeClasses<T extends Family>(map: {
  [x: string]: NodeClassDefinition<T>;
}): {
  family: T;
  name: string;
  id: string;
  path: string;
  statements: (ts.ImportDeclaration | ts.VariableStatement | ts.TypeAliasDeclaration | ts.ClassDeclaration | ts.ExpressionStatement | ts.ModuleDeclaration)[];
}[] {
  return Object.values(map).map((p) => createNodeClass(p));
}

function createCommandMethodDeclaration(def: CommandDefinition) {
  return factory.createMethodDeclaration(
    [factory.createToken(ts.SyntaxKind.AsyncKeyword)],
    undefined,
    factory.createIdentifier(def.name),
    undefined,
    undefined,

    def.parameters ? Object.values(def.parameters).map(createParameterDeclarationSignature) : undefined,
    undefined,
    factory.createBlock(
      [
        factory.createReturnStatement(
          factory.createCallExpression(
            factory.createPropertyAccessExpression(factory.createThis(), factory.createIdentifier("sendCommand")),
            undefined,
            [
              factory.createStringLiteral(def.id),
              ...(def.parameters
                ? [
                  factory.createObjectLiteralExpression(
                    [
                      ...Object.values(def.parameters).map((p) =>
                        factory.createPropertyAssignment(
                          factory.createIdentifier(p.id ?? "value"),
                          factory.createIdentifier(p.name ?? "value")
                        )
                      ),
                    ],
                    false
                  ),
                ]
                : []),
            ]
          )
        ),
      ],
      true
    )
  );
}

function createCommandParameterType(def: DataTypeDefinition, parent: ParameterDefinition): ts.TypeNode {
  if (def.enum) {
    {
      if (EnumDefinitionMap.has(parent.classDef.family)) {
        var enumDef = EnumDefinitionMap.get(parent.classDef.family)[def.indexId];

        // ?? EnumDefinitionMap[Family.Global]?[def.indexId]
        if (enumDef) {
          return factory.createTypeReferenceNode(
            factory.createQualifiedName(
              factory.createIdentifier(Family[parent.classDef.family]),
              factory.createIdentifier(enumDef.name)
            ),
            undefined
          );
        }
      }

      if (def.values) {
        return factory.createUnionTypeNode(
          Object.keys(def.values).map((p) => factory.createLiteralTypeNode(factory.createNumericLiteral(p)))
        );
      }

      //   return factory.createUnionTypeNode(
      //     Object.values(def.values).map((p) => factory.createTypeReferenceNode(
      //   factory.createQualifiedName(
      //     factory.createIdentifier("UnitOfMeasure"),
      //     factory.createIdentifier(UnitOfMeasure)
      //   ),
      //   undefined
      // )))
    }
  }
  return factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
}

function createCommandSignature(def: CommandDefinition) {
  return factory.createPropertySignature(
    undefined,
    factory.createIdentifier(def.id),
    undefined,
   factory.createIntersectionTypeNode([
        factory.createParenthesizedType(factory.createFunctionTypeNode(
      undefined,
      def.parameters ? Object.values(def.parameters).map(createParameterSignature) : [],

      factory.createTypeReferenceNode(factory.createIdentifier("Promise"), [
        factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword),
      ])
    )),
        factory.createTypeLiteralNode([
          factory.createPropertySignature(
            undefined,
            factory.createIdentifier("label"),
            undefined,
            factory.createLiteralTypeNode(factory.createStringLiteral(def.label))
          ),
          factory.createPropertySignature(
            undefined,
            factory.createIdentifier("name"),
            undefined,
            factory.createLiteralTypeNode(factory.createStringLiteral(def.name))
          )
        ])
      ])
  );
}



function createDriverGetDeclaration(def: DriverDefinition) {
  return factory.createGetAccessorDeclaration(
    [factory.createToken(ts.SyntaxKind.PublicKeyword)],
    factory.createIdentifier(def.name),
    [],
    factory.createUnionTypeNode(Object.values(def.dataType).map((p) => createDriverPropertyReturnType(p, def))),
    factory.createBlock(
      [
        factory.createReturnStatement(
          factory.createPropertyAccessChain(
            factory.createPropertyAccessExpression(
              factory.createPropertyAccessExpression(factory.createThis(), factory.createIdentifier("drivers")),
              factory.createIdentifier(def.id)
            ),
            factory.createToken(ts.SyntaxKind.QuestionDotToken),
            factory.createIdentifier("value")
          )
        ),
      ],
      true
    )
  );
}

function createDriverInitializationStatement(def: DriverDefinition): ts.Statement {
  return factory.createExpressionStatement(
    factory.createBinaryExpression(
      factory.createPropertyAccessExpression(
        factory.createPropertyAccessExpression(factory.createThis(), factory.createIdentifier("drivers")),
        factory.createIdentifier(def.id)
      ),
      factory.createToken(ts.SyntaxKind.EqualsToken),
      factory.createCallExpression(
        factory.createPropertyAccessExpression(factory.createIdentifier("Driver"), factory.createIdentifier("create")),
        undefined,
        [
          factory.createStringLiteral(def.id),
          factory.createThis(),
          factory.createAsExpression(
            factory.createPropertyAccessExpression(
              factory.createIdentifier("nodeInfo"),
              factory.createIdentifier("property")
            ),
            factory.createTypeReferenceNode(factory.createIdentifier("DriverState"), undefined)
          ),
          factory.createObjectLiteralExpression(
            [
              factory.createPropertyAssignment(
                factory.createIdentifier("uom"),
                factory.createPropertyAccessExpression(
                  factory.createIdentifier("UnitOfMeasure"),
                  factory.createIdentifier(UnitOfMeasure[parseInt(Object.keys(def.dataType)[0])] ?? "Unknown")
                )
              ),
              factory.createPropertyAssignment(
                factory.createIdentifier("label"),
                factory.createStringLiteral(def.label)
              ),
              factory.createPropertyAssignment(factory.createIdentifier("name"), factory.createStringLiteral(def.name)),
            ],
            false
          ),
        ]
      )
    )
  );
}

function createDriverPropertyReturnType(def: DataTypeDefinition, parent: DriverDefinition): ts.TypeNode {
  if (def.enum) {
    {
      if (EnumDefinitionMap.has(parent.classDef.family)) {
        var enumDef = EnumDefinitionMap.get(parent.classDef.family)[def.indexId];

        // ?? EnumDefinitionMap[Family.Global]?[def.indexId]
        if (enumDef) {
          return factory.createTypeReferenceNode(
            factory.createQualifiedName(
              factory.createIdentifier(Family[parent.classDef.family]),
              factory.createIdentifier(enumDef.name)
            ),
            undefined
          );
        }
      }
      if (def.values) {
        return factory.createUnionTypeNode(
          Object.keys(def.values).map((p) => factory.createLiteralTypeNode(factory.createNumericLiteral(p)))
        );
      }

      //   return factory.createUnionTypeNode(
      //     Object.values(def.values).map((p) => factory.createTypeReferenceNode(
      //   factory.createQualifiedName(
      //     factory.createIdentifier("UnitOfMeasure"),
      //     factory.createIdentifier(UnitOfMeasure)
      //   ),
      //   undefined
      // )))
    }
  }
  return factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
}

function createDriverSignature(def: DriverDefinition) {
  return factory.createPropertySignature(
    undefined,
    factory.createIdentifier(def.id),
    factory.createToken(ts.SyntaxKind.QuestionToken),
    factory.createTypeLiteralNode([
      factory.createPropertySignature(
        undefined,
        factory.createIdentifier("uom"),
        undefined,
        def.dataType
          ? factory.createUnionTypeNode(Object.values(def.dataType).map((p) => createTypeNodeForUOM(p.uom)))
          : factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)
      ),
      factory.createPropertySignature(
        undefined,
        factory.createIdentifier("value"),
        undefined,
        def.dataType
          ? factory.createUnionTypeNode(Object.values(def.dataType).map((p) => createDriverSignatureReturnType(p, def)))
          : factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)
      ),
    ])
  );
}

function createDriverSignatureReturnType(def: DataTypeDefinition, parent: DriverDefinition): ts.TypeNode {
  if (def.enum) {
    if (EnumDefinitionMap.has(parent.classDef.family)) {
      var enumDef = EnumDefinitionMap.get(parent.classDef.family)[def.indexId];

      // ?? EnumDefinitionMap[Family.Global]?[def.indexId]
      if (enumDef) {
        return factory.createTypeReferenceNode(
          factory.createQualifiedName(
            factory.createIdentifier(Family[parent.classDef.family]),
            factory.createIdentifier(enumDef.name)
          ),
          undefined
        );
      }
    }
    if (def.values) {
      return factory.createUnionTypeNode(
        Object.keys(def.values).map((p) => factory.createLiteralTypeNode(factory.createNumericLiteral(p)))
      );
    }
  }
  return factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
}

export function createNodeClass<T extends Family>(nodeClassDef: NodeClassDefinition<T>): GeneratedNodeClass<T> {
  return {
    family: nodeClassDef.family,
    name: nodeClassDef.name,
    id: nodeClassDef.id,
    path: `/${Family[nodeClassDef.family]}/Generated/${nodeClassDef.name}.ts`,
    statements: [
      factory.createImportDeclaration(
        undefined,
        factory.createImportClause(
          false,
          undefined,
          factory.createNamedImports([
            factory.createImportSpecifier(false, undefined, factory.createIdentifier("UnitOfMeasure")),
          ])
        ),
        factory.createStringLiteral("../../../Definitions/Global/UOM.js"),
        undefined
      ),
      factory.createImportDeclaration(
        undefined,
        factory.createImportClause(
          false,
          undefined,
          factory.createNamedImports([
            factory.createImportSpecifier(false, undefined, factory.createIdentifier("Family")),
          ])
        ),
        factory.createStringLiteral("../../../Definitions/Global/Families.js"),
        undefined
      ),
      factory.createImportDeclaration(
        undefined,
        factory.createImportClause(
          true,
          undefined,
          factory.createNamedImports([
            factory.createImportSpecifier(false, undefined, factory.createIdentifier("NodeInfo")),
          ])
        ),
        factory.createStringLiteral("../../../Model/NodeInfo.js"),
        undefined
      ),
      factory.createImportDeclaration(
        undefined,
        factory.createImportClause(
          true,
          undefined,
          factory.createNamedImports([factory.createImportSpecifier(false, undefined, factory.createIdentifier("ISY"))])
        ),
        factory.createStringLiteral("../../../ISY.js"),
        undefined
      ),
      factory.createImportDeclaration(
        undefined,
        factory.createImportClause(
          false,
          undefined,
          factory.createNamedImports([factory.createImportSpecifier(
            false,
            undefined,
            factory.createIdentifier("Base")
          )])
        ),
        factory.createStringLiteral("../index.js"),
        undefined
      ),
      factory.createImportDeclaration(
        undefined,
        factory.createImportClause(
          false,
          undefined,
          factory.createNamedImports([
            factory.createImportSpecifier(false, undefined, factory.createIdentifier("Driver")),
          ])
        ),
        factory.createStringLiteral("../../../Definitions/Global/Drivers.js"),
        undefined
      ),
      factory.createImportDeclaration(
        undefined,
        factory.createImportClause(
          false,
          undefined,
          factory.createNamedImports([
            factory.createImportSpecifier(
              false,
              undefined,
              factory.createIdentifier("Driver")
            ), factory.createImportSpecifier(
              false,
              undefined,
              factory.createIdentifier(Family[nodeClassDef.family])
            )])
        ),
        factory.createStringLiteral("../../../Definitions/index.js"),
        undefined
      ),
      factory.createImportDeclaration(
        undefined,
        factory.createImportClause(
          true,
          undefined,
          factory.createNamedImports([
            factory.createImportSpecifier(false, undefined, factory.createIdentifier("DriverState")),
          ])
        ),
        factory.createStringLiteral("../../../Model/DriverState.js"),
        undefined
      ),
      factory.createImportDeclaration(
        undefined,
        factory.createImportClause(
          false,
          undefined,
          factory.createNamedImports([factory.createImportSpecifier(
            false,
            undefined,
            factory.createIdentifier("NodeFactory")
          )])
        ),
        factory.createStringLiteral("../../NodeFactory.js"),
        undefined
      ),
      factory.createVariableStatement(
        [factory.createToken(ts.SyntaxKind.ExportKeyword)],
        factory.createVariableDeclarationList(
          [
            factory.createVariableDeclaration(
              factory.createIdentifier("nodeDefId"),
              undefined,
              undefined,
              factory.createStringLiteral(nodeClassDef.id)
            ),
          ],
          ts.NodeFlags.Const
        )
      ),
      factory.createTypeAliasDeclaration(
        undefined,
        factory.createIdentifier("Commands"),
        undefined,
        factory.createTypeReferenceNode(
          factory.createQualifiedName(
            factory.createIdentifier(nodeClassDef.name),
            factory.createIdentifier("Commands")
          ),
          undefined
        )
      ),

      factory.createTypeAliasDeclaration(
        undefined,
        factory.createIdentifier("Drivers"),
        undefined,
        factory.createTypeReferenceNode(
          factory.createQualifiedName(
            factory.createIdentifier(nodeClassDef.name),
            factory.createIdentifier("Drivers")
          ),
          undefined
        )
      ),
      ,
      factory.createClassDeclaration(
        [factory.createToken(ts.SyntaxKind.ExportKeyword)],
        factory.createIdentifier(nodeClassDef.name),
        undefined,
        [
          factory.createHeritageClause(
            ts.SyntaxKind.ExtendsKeyword,
            [factory.createExpressionWithTypeArguments(
              factory.createIdentifier("Base"),
              [
                factory.createTypeReferenceNode(
                  factory.createIdentifier("Drivers"),
                  undefined
                ),
                factory.createTypeReferenceNode(
                  factory.createIdentifier("Commands"),
                  undefined
                )
              ]
            )]
          ),
        ],
        [
          factory.createPropertyDeclaration(
            [factory.createToken(ts.SyntaxKind.PublicKeyword), factory.createToken(ts.SyntaxKind.ReadonlyKeyword)],
            factory.createIdentifier("commands"),
            undefined,
            factory.createTypeReferenceNode(factory.createIdentifier("Commands"), undefined),
            factory.createObjectLiteralExpression(
              [
                ...Object.values(nodeClassDef.commands).map((c) =>
                  factory.createPropertyAssignment(
                    factory.createIdentifier(c.id),
                    factory.createPropertyAccessExpression(factory.createThis(), factory.createIdentifier(c.name))
                  )
                ),
              ],
              true
            )
          ),
          factory.createPropertyDeclaration(
            [factory.createToken(ts.SyntaxKind.PublicKeyword)],
            factory.createIdentifier("drivers"),
            undefined,
            factory.createTypeReferenceNode(factory.createIdentifier("Drivers"), undefined),
            factory.createObjectLiteralExpression([], false)
          ),
          factory.createPropertyDeclaration(
            [factory.createToken(ts.SyntaxKind.StaticKeyword)],
            factory.createIdentifier("nodeDefId"),
            undefined,
            undefined,
            factory.createStringLiteral(nodeClassDef.id)
          ),
          factory.createConstructorDeclaration(
            undefined,
            [
              factory.createParameterDeclaration(
                undefined,
                undefined,
                factory.createIdentifier("isy"),
                undefined,
                factory.createTypeReferenceNode(factory.createIdentifier("ISY"), undefined),
                undefined
              ),
              factory.createParameterDeclaration(
                undefined,
                undefined,
                factory.createIdentifier("nodeInfo"),
                undefined,
                factory.createTypeReferenceNode(factory.createIdentifier("NodeInfo"), undefined),
                undefined
              ),
            ],
            factory.createBlock(
              [
                factory.createExpressionStatement(
                  factory.createCallExpression(factory.createSuper(), undefined, [
                    factory.createIdentifier("isy"),
                    factory.createIdentifier("nodeInfo"),
                  ])
                ),
                ...Object.values(nodeClassDef.drivers).map(createDriverInitializationStatement),
              ],
              true
            )
          ),
          ...Object.values(nodeClassDef.commands).map(createCommandMethodDeclaration),
          ...Object.values(nodeClassDef.drivers).map(createDriverGetDeclaration),
        ]
      ),
      factory.createExpressionStatement(factory.createCallExpression(
        factory.createPropertyAccessExpression(
          factory.createIdentifier("NodeFactory"),
          factory.createIdentifier("register")
        ),
        undefined,
        [factory.createIdentifier(nodeClassDef.name)]
      )),
      factory.createModuleDeclaration(
        [factory.createToken(ts.SyntaxKind.ExportKeyword)],
        factory.createIdentifier("RelaySwitchOnlyAdvNode"),
        factory.createModuleBlock([
          factory.createTypeAliasDeclaration(
            undefined,
            factory.createIdentifier("Commands"),
            undefined,
            factory.createTypeLiteralNode([...Object.values(nodeClassDef.commands).map(createCommandSignature)])
          ),
          factory.createTypeAliasDeclaration(
            undefined,
            factory.createIdentifier("Drivers"),
            undefined,
            factory.createTypeLiteralNode([...Object.values(nodeClassDef.drivers).map(createDriverSignature)])
          )
        ]),
        ts.NodeFlags.Namespace
      )

    ],
  };
}

function createParameterDeclarationSignature(def: ParameterDefinition) {
  return factory.createParameterDeclaration(
    undefined,
    undefined,
    factory.createIdentifier(def.name ?? "value"),
    undefined,
    def.dataType
      ? factory.createUnionTypeNode(Object.values(def.dataType).map((p) => createCommandParameterType(p, def)))
      : factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
    undefined
  );
}

function createParameterSignature(def: ParameterDefinition) {
  return factory.createParameterDeclaration(
    undefined,
    undefined,
    factory.createIdentifier(def.id ?? "value"),
    undefined,
    def.dataType
      ? factory.createUnionTypeNode(Object.values(def.dataType).map((p) => createCommandParameterType(p, def)))
      : factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
    undefined
  );
}

function createTypeNodeForUOM(uom: number): ts.TypeNode {
  return factory.createTypeReferenceNode(
    factory.createQualifiedName(
      factory.createIdentifier("UnitOfMeasure"),
      factory.createIdentifier(UnitOfMeasure[uom] ?? "Unknown")
    )
  );
}

// #endregion Functions (14)
