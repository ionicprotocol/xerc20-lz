import { EndpointId } from '@layerzerolabs/lz-definitions'
const baseContract = {
    eid: EndpointId.BASE_V2_MAINNET,
    contractName: 'xERC20LayerZero',
}
const bobContract = {
    eid: EndpointId.BOB_V2_MAINNET,
    contractName: 'xERC20LayerZero',
}
const fraxtalContract = {
    eid: EndpointId.FRAXTAL_V2_MAINNET,
    contractName: 'xERC20LayerZero',
}
const modeContract = {
    eid: EndpointId.MODE_V2_MAINNET,
    contractName: 'xERC20LayerZero',
}
const optimismContract = {
    eid: EndpointId.OPTIMISM_V2_MAINNET,
    contractName: 'xERC20LayerZero',
}
export default {
    contracts: [
        { contract: baseContract },
        { contract: bobContract },
        { contract: fraxtalContract },
        { contract: modeContract },
        { contract: optimismContract },
    ],
    connections: [
        {
            from: baseContract,
            to: bobContract,
            config: {
                sendLibrary: '0xB5320B0B3a13cC860893E2Bd79FCd7e13484Dda2',
                receiveLibraryConfig: { receiveLibrary: '0xc70AB6f32772f59fBfc23889Caf4Ba3376C84bAf', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x2CCA08ae69E0C44b18a57Ab2A87644234dAebaE4' },
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: ['0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b'],
                        optionalDVNs: [
                            '0xa7b5189bca84cd304d8553977c7c614329750d99',
                            '0x9e059a54699a285714207b43b055483e78faac25',
                            '0xcd37ca043f8479064e10635020c65ffc005d36f6',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 5,
                        requiredDVNs: ['0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b'],
                        optionalDVNs: [
                            '0xa7b5189bca84cd304d8553977c7c614329750d99',
                            '0x9e059a54699a285714207b43b055483e78faac25',
                            '0xcd37ca043f8479064e10635020c65ffc005d36f6',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
            },
        },
        {
            from: baseContract,
            to: fraxtalContract,
            config: {
                sendLibrary: '0xB5320B0B3a13cC860893E2Bd79FCd7e13484Dda2',
                receiveLibraryConfig: { receiveLibrary: '0xc70AB6f32772f59fBfc23889Caf4Ba3376C84bAf', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x2CCA08ae69E0C44b18a57Ab2A87644234dAebaE4' },
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: ['0xcd37ca043f8479064e10635020c65ffc005d36f6'],
                        optionalDVNs: [
                            '0xa7b5189bca84cd304d8553977c7c614329750d99',
                            '0x9e059a54699a285714207b43b055483e78faac25',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 5,
                        requiredDVNs: ['0xcd37ca043f8479064e10635020c65ffc005d36f6'],
                        optionalDVNs: [
                            '0xa7b5189bca84cd304d8553977c7c614329750d99',
                            '0x9e059a54699a285714207b43b055483e78faac25',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
            },
        },
        {
            from: baseContract,
            to: modeContract,
            config: {
                sendLibrary: '0xB5320B0B3a13cC860893E2Bd79FCd7e13484Dda2',
                receiveLibraryConfig: { receiveLibrary: '0xc70AB6f32772f59fBfc23889Caf4Ba3376C84bAf', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x2CCA08ae69E0C44b18a57Ab2A87644234dAebaE4' },
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: ['0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b'],
                        optionalDVNs: [
                            '0x8ddf05f9a5c488b4973897e278b58895bf87cb24',
                            '0xcd37ca043f8479064e10635020c65ffc005d36f6',
                            '0x9e059a54699a285714207b43b055483e78faac25',
                            '0xa7b5189bca84cd304d8553977c7c614329750d99',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 5,
                        requiredDVNs: ['0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b'],
                        optionalDVNs: [
                            '0x8ddf05f9a5c488b4973897e278b58895bf87cb24',
                            '0xcd37ca043f8479064e10635020c65ffc005d36f6',
                            '0x9e059a54699a285714207b43b055483e78faac25',
                            '0xa7b5189bca84cd304d8553977c7c614329750d99',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
            },
        },
        {
            from: baseContract,
            to: optimismContract,
            config: {
                sendLibrary: '0xB5320B0B3a13cC860893E2Bd79FCd7e13484Dda2',
                receiveLibraryConfig: { receiveLibrary: '0xc70AB6f32772f59fBfc23889Caf4Ba3376C84bAf', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x2CCA08ae69E0C44b18a57Ab2A87644234dAebaE4' },
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: [
                            '0x9e059a54699a285714207b43B055483E78FAac25',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x9e059a54699a285714207b43B055483E78FAac25',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: bobContract,
            to: baseContract,
            config: {
                sendLibrary: '0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7',
                receiveLibraryConfig: { receiveLibrary: '0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0xc097ab8CD7b053326DFe9fB3E3a31a0CCe3B526f' },
                    ulnConfig: {
                        confirmations: 5,
                        requiredDVNs: ['0x58dff8622759ea75910a08dba5d060579271dcd7'],
                        optionalDVNs: [
                            '0xf2067660520f79eb7a8326dc1266dce0167d64e7',
                            '0x6788f52439aca6bff597d3eec2dc9a44b8fee842',
                            '0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: ['0x58dff8622759ea75910a08dba5d060579271dcd7'],
                        optionalDVNs: [
                            '0xf2067660520f79eb7a8326dc1266dce0167d64e7',
                            '0x6788f52439aca6bff597d3eec2dc9a44b8fee842',
                            '0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
            },
        },
        {
            from: bobContract,
            to: fraxtalContract,
            config: {
                sendLibrary: '0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7',
                receiveLibraryConfig: { receiveLibrary: '0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0xc097ab8CD7b053326DFe9fB3E3a31a0CCe3B526f' },
                    ulnConfig: {
                        confirmations: 5,
                        requiredDVNs: ['0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b'],
                        optionalDVNs: [
                            '0x6788f52439aca6bff597d3eec2dc9a44b8fee842',
                            '0xf2067660520f79eb7a8326dc1266dce0167d64e7',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 5,
                        requiredDVNs: ['0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b'],
                        optionalDVNs: [
                            '0x6788f52439aca6bff597d3eec2dc9a44b8fee842',
                            '0xf2067660520f79eb7a8326dc1266dce0167d64e7',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
            },
        },
        {
            from: bobContract,
            to: modeContract,
            config: {
                sendLibrary: '0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7',
                receiveLibraryConfig: { receiveLibrary: '0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0xc097ab8CD7b053326DFe9fB3E3a31a0CCe3B526f' },
                    ulnConfig: {
                        confirmations: 5,
                        requiredDVNs: ['0x58dff8622759ea75910a08dba5d060579271dcd7'],
                        optionalDVNs: [
                            '0xf2067660520f79eb7a8326dc1266dce0167d64e7',
                            '0x6788f52439aca6bff597d3eec2dc9a44b8fee842',
                            '0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 5,
                        requiredDVNs: ['0x58dff8622759ea75910a08dba5d060579271dcd7'],
                        optionalDVNs: [
                            '0xf2067660520f79eb7a8326dc1266dce0167d64e7',
                            '0x6788f52439aca6bff597d3eec2dc9a44b8fee842',
                            '0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
            },
        },
        {
            from: bobContract,
            to: optimismContract,
            config: {
                sendLibrary: '0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7',
                receiveLibraryConfig: { receiveLibrary: '0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0xc097ab8CD7b053326DFe9fB3E3a31a0CCe3B526f' },
                    ulnConfig: {
                        confirmations: 5,
                        requiredDVNs: ['0x58dff8622759ea75910a08dba5d060579271dcd7'],
                        optionalDVNs: [
                            '0xf2067660520f79eb7a8326dc1266dce0167d64e7',
                            '0x6788f52439aca6bff597d3eec2dc9a44b8fee842',
                            '0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: ['0x58dff8622759ea75910a08dba5d060579271dcd7'],
                        optionalDVNs: [
                            '0xf2067660520f79eb7a8326dc1266dce0167d64e7',
                            '0x6788f52439aca6bff597d3eec2dc9a44b8fee842',
                            '0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
            },
        },
        {
            from: fraxtalContract,
            to: baseContract,
            config: {
                sendLibrary: '0x377530cdA84DFb2673bF4d145DCF0C4D7fdcB5b6',
                receiveLibraryConfig: { receiveLibrary: '0x8bC1e36F015b9902B54b1387A4d733cebc2f5A4e', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x41Bdb4aa4A63a5b2Efc531858d3118392B1A1C3d' },
                    ulnConfig: {
                        confirmations: 5,
                        requiredDVNs: ['0xa7b5189bca84cd304d8553977c7c614329750d99'],
                        optionalDVNs: [
                            '0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b',
                            '0xcce466a522984415bc91338c232d98869193d46e',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: ['0xa7b5189bca84cd304d8553977c7c614329750d99'],
                        optionalDVNs: [
                            '0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b',
                            '0xcce466a522984415bc91338c232d98869193d46e',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
            },
        },
        {
            from: fraxtalContract,
            to: bobContract,
            config: {
                sendLibrary: '0x377530cdA84DFb2673bF4d145DCF0C4D7fdcB5b6',
                receiveLibraryConfig: { receiveLibrary: '0x8bC1e36F015b9902B54b1387A4d733cebc2f5A4e', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x41Bdb4aa4A63a5b2Efc531858d3118392B1A1C3d' },
                    ulnConfig: {
                        confirmations: 5,
                        requiredDVNs: ['0xa7b5189bca84cd304d8553977c7c614329750d99'],
                        optionalDVNs: [
                            '0xcce466a522984415bc91338c232d98869193d46e',
                            '0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 5,
                        requiredDVNs: ['0xa7b5189bca84cd304d8553977c7c614329750d99'],
                        optionalDVNs: [
                            '0xcce466a522984415bc91338c232d98869193d46e',
                            '0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
            },
        },
        {
            from: fraxtalContract,
            to: modeContract,
            config: {
                sendLibrary: '0x377530cdA84DFb2673bF4d145DCF0C4D7fdcB5b6',
                receiveLibraryConfig: { receiveLibrary: '0x8bC1e36F015b9902B54b1387A4d733cebc2f5A4e', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x41Bdb4aa4A63a5b2Efc531858d3118392B1A1C3d' },
                    ulnConfig: {
                        confirmations: 5,
                        requiredDVNs: ['0xa7b5189bca84cd304d8553977c7c614329750d99'],
                        optionalDVNs: [
                            '0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b',
                            '0xcce466a522984415bc91338c232d98869193d46e',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 5,
                        requiredDVNs: ['0xa7b5189bca84cd304d8553977c7c614329750d99'],
                        optionalDVNs: [
                            '0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b',
                            '0xcce466a522984415bc91338c232d98869193d46e',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
            },
        },
        {
            from: fraxtalContract,
            to: optimismContract,
            config: {
                sendLibrary: '0x377530cdA84DFb2673bF4d145DCF0C4D7fdcB5b6',
                receiveLibraryConfig: { receiveLibrary: '0x8bC1e36F015b9902B54b1387A4d733cebc2f5A4e', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x41Bdb4aa4A63a5b2Efc531858d3118392B1A1C3d' },
                    ulnConfig: {
                        confirmations: 5,
                        requiredDVNs: ['0xa7b5189bca84cd304d8553977c7c614329750d99'],
                        optionalDVNs: [
                            '0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b',
                            '0xcce466a522984415bc91338c232d98869193d46e',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: ['0xa7b5189bca84cd304d8553977c7c614329750d99'],
                        optionalDVNs: [
                            '0xdd7b5e1db4aafd5c8ec3b764efb8ed265aa5445b',
                            '0xcce466a522984415bc91338c232d98869193d46e',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
            },
        },
        {
            from: modeContract,
            to: baseContract,
            config: {
                sendLibrary: '0x2367325334447C5E1E0f1b3a6fB947b262F58312',
                receiveLibraryConfig: { receiveLibrary: '0xc1B621b18187F74c8F6D52a6F709Dd2780C09821', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x4208D6E27538189bB48E603D6123A94b8Abe0A0b' },
                    ulnConfig: {
                        confirmations: 5,
                        requiredDVNs: ['0x10901f74cae315f674d3f6fc0645217fe4fad77c'],
                        optionalDVNs: [
                            '0x8ddf05f9a5c488b4973897e278b58895bf87cb24',
                            '0xcd37ca043f8479064e10635020c65ffc005d36f6',
                            '0xce8358bc28dd8296ce8caf1cd2b44787abd65887',
                            '0xacde1f22eeab249d3ca6ba8805c8fee9f52a16e7',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: ['0x10901f74cae315f674d3f6fc0645217fe4fad77c'],
                        optionalDVNs: [
                            '0x8ddf05f9a5c488b4973897e278b58895bf87cb24',
                            '0xcd37ca043f8479064e10635020c65ffc005d36f6',
                            '0xce8358bc28dd8296ce8caf1cd2b44787abd65887',
                            '0xacde1f22eeab249d3ca6ba8805c8fee9f52a16e7',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
            },
        },
        {
            from: modeContract,
            to: bobContract,
            config: {
                sendLibrary: '0x2367325334447C5E1E0f1b3a6fB947b262F58312',
                receiveLibraryConfig: { receiveLibrary: '0xc1B621b18187F74c8F6D52a6F709Dd2780C09821', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x4208D6E27538189bB48E603D6123A94b8Abe0A0b' },
                    ulnConfig: {
                        confirmations: 5,
                        requiredDVNs: ['0x10901f74cae315f674d3f6fc0645217fe4fad77c'],
                        optionalDVNs: [
                            '0xacde1f22eeab249d3ca6ba8805c8fee9f52a16e7',
                            '0xce8358bc28dd8296ce8caf1cd2b44787abd65887',
                            '0xcd37ca043f8479064e10635020c65ffc005d36f6',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 5,
                        requiredDVNs: ['0x10901f74cae315f674d3f6fc0645217fe4fad77c'],
                        optionalDVNs: [
                            '0xacde1f22eeab249d3ca6ba8805c8fee9f52a16e7',
                            '0xce8358bc28dd8296ce8caf1cd2b44787abd65887',
                            '0xcd37ca043f8479064e10635020c65ffc005d36f6',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
            },
        },
        {
            from: modeContract,
            to: fraxtalContract,
            config: {
                sendLibrary: '0x2367325334447C5E1E0f1b3a6fB947b262F58312',
                receiveLibraryConfig: { receiveLibrary: '0xc1B621b18187F74c8F6D52a6F709Dd2780C09821', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x4208D6E27538189bB48E603D6123A94b8Abe0A0b' },
                    ulnConfig: {
                        confirmations: 5,
                        requiredDVNs: ['0xcd37ca043f8479064e10635020c65ffc005d36f6'],
                        optionalDVNs: [
                            '0xacde1f22eeab249d3ca6ba8805c8fee9f52a16e7',
                            '0xce8358bc28dd8296ce8caf1cd2b44787abd65887',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 5,
                        requiredDVNs: ['0xcd37ca043f8479064e10635020c65ffc005d36f6'],
                        optionalDVNs: [
                            '0xacde1f22eeab249d3ca6ba8805c8fee9f52a16e7',
                            '0xce8358bc28dd8296ce8caf1cd2b44787abd65887',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
            },
        },
        {
            from: modeContract,
            to: optimismContract,
            config: {
                sendLibrary: '0x2367325334447C5E1E0f1b3a6fB947b262F58312',
                receiveLibraryConfig: { receiveLibrary: '0xc1B621b18187F74c8F6D52a6F709Dd2780C09821', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x4208D6E27538189bB48E603D6123A94b8Abe0A0b' },
                    ulnConfig: {
                        confirmations: 5,
                        requiredDVNs: ['0x10901f74cae315f674d3f6fc0645217fe4fad77c'],
                        optionalDVNs: [
                            '0xcd37ca043f8479064e10635020c65ffc005d36f6',
                            '0xce8358bc28dd8296ce8caf1cd2b44787abd65887',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: ['0x10901f74cae315f674d3f6fc0645217fe4fad77c'],
                        optionalDVNs: [
                            '0xcd37ca043f8479064e10635020c65ffc005d36f6',
                            '0xce8358bc28dd8296ce8caf1cd2b44787abd65887',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
            },
        },
        {
            from: optimismContract,
            to: baseContract,
            config: {
                sendLibrary: '0x1322871e4ab09Bc7f5717189434f97bBD9546e95',
                receiveLibraryConfig: { receiveLibrary: '0x3c4962Ff6258dcfCafD23a814237B7d6Eb712063', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x2D2ea0697bdbede3F01553D2Ae4B8d0c486B666e' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: [
                            '0x6A02D83e8d433304bba74EF1c427913958187142',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 10,
                        requiredDVNs: [
                            '0x6A02D83e8d433304bba74EF1c427913958187142',
                            '0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc',
                        ],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: optimismContract,
            to: bobContract,
            config: {
                sendLibrary: '0x1322871e4ab09Bc7f5717189434f97bBD9546e95',
                receiveLibraryConfig: { receiveLibrary: '0x3c4962Ff6258dcfCafD23a814237B7d6Eb712063', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x2D2ea0697bdbede3F01553D2Ae4B8d0c486B666e' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: ['0x19670df5e16bea2ba9b9e68b48c054c5baea06b8'],
                        optionalDVNs: [
                            '0x9e930731cb4a6bf7ecc11f695a295c60bdd212eb',
                            '0x6a02d83e8d433304bba74ef1c427913958187142',
                            '0xa7b5189bca84cd304d8553977c7c614329750d99',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 5,
                        requiredDVNs: ['0x19670df5e16bea2ba9b9e68b48c054c5baea06b8'],
                        optionalDVNs: [
                            '0x9e930731cb4a6bf7ecc11f695a295c60bdd212eb',
                            '0x6a02d83e8d433304bba74ef1c427913958187142',
                            '0xa7b5189bca84cd304d8553977c7c614329750d99',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
            },
        },
        {
            from: optimismContract,
            to: fraxtalContract,
            config: {
                sendLibrary: '0x1322871e4ab09Bc7f5717189434f97bBD9546e95',
                receiveLibraryConfig: { receiveLibrary: '0x3c4962Ff6258dcfCafD23a814237B7d6Eb712063', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x2D2ea0697bdbede3F01553D2Ae4B8d0c486B666e' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: ['0xa7b5189bca84cd304d8553977c7c614329750d99'],
                        optionalDVNs: [
                            '0x9e930731cb4a6bf7ecc11f695a295c60bdd212eb',
                            '0x6a02d83e8d433304bba74ef1c427913958187142',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 5,
                        requiredDVNs: ['0xa7b5189bca84cd304d8553977c7c614329750d99'],
                        optionalDVNs: [
                            '0x9e930731cb4a6bf7ecc11f695a295c60bdd212eb',
                            '0x6a02d83e8d433304bba74ef1c427913958187142',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
            },
        },
        {
            from: optimismContract,
            to: modeContract,
            config: {
                sendLibrary: '0x1322871e4ab09Bc7f5717189434f97bBD9546e95',
                receiveLibraryConfig: { receiveLibrary: '0x3c4962Ff6258dcfCafD23a814237B7d6Eb712063', gracePeriod: 0 },
                sendConfig: {
                    executorConfig: { maxMessageSize: 10000, executor: '0x2D2ea0697bdbede3F01553D2Ae4B8d0c486B666e' },
                    ulnConfig: {
                        confirmations: 20,
                        requiredDVNs: ['0x19670df5e16bea2ba9b9e68b48c054c5baea06b8'],
                        optionalDVNs: [
                            '0x9e930731cb4a6bf7ecc11f695a295c60bdd212eb',
                            '0x6a02d83e8d433304bba74ef1c427913958187142',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: 5,
                        requiredDVNs: ['0x19670df5e16bea2ba9b9e68b48c054c5baea06b8'],
                        optionalDVNs: [
                            '0x9e930731cb4a6bf7ecc11f695a295c60bdd212eb',
                            '0x6a02d83e8d433304bba74ef1c427913958187142',
                        ],
                        optionalDVNThreshold: 1,
                    },
                },
            },
        },
    ],
}
