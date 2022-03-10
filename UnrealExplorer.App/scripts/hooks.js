const pbjs = require("protobufjs/cli/pbjs")
const pbts = require("protobufjs/cli/pbts")

module.exports = {
    generateAssets: async (forgeConfig) => {
        //console.log('generateAssets hook called!')
        
        console.log('Generating protobuf static modules')
        pbjs.main([
            '-t', 'static-module',
            '-w', 'commonjs',
            '-o', 'src/common/bridge/generated/proto/bridge.js',
            '../UnrealExplorer.Common/Protos/*.proto'])
        
        console.log('Generating protobuf ts definitions')
        pbts.main([
            '-o', 'src/common/bridge/generated/proto/bridge.d.ts',
            'src/common/bridge/generated/proto/bridge.js'
        ])
    },
    /*prePackage: async (forgeConfig) => {
        console.log('prePackage hook called!')
    },
    packageAfterCopy: async (forgeConfig) => {
        console.log('packageAfterCopy hook called!')
    },
    packageAfterPrune: async (forgeConfig) => {
        console.log('packageAfterPrune hook called!')
    },
    packageAfterExtract: async (forgeConfig) => {
        console.log('packageAfterExtract hook called!')
    },
    postPackage: async (forgeConfig) => {
        console.log('postPackage hook called!')
    },
    preMake: async (forgeConfig) => {
        console.log('preMake hook called!')
    },
    postMake: async (forgeConfig) => {
        console.log('postMake hook called!')
    },
    readPackageJson: async (forgeConfig) => {
        console.log('readPackageJson hook called!')
    }*/
}