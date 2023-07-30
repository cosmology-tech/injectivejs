import { join } from 'path';
import telescope from '@cosmology/telescope';
import { sync as rimraf } from 'rimraf';
import { INJECTIVE_AMINO_MAP } from './aminos';

const protoDirs = [join(__dirname, '/../proto')];
const outPath = join(__dirname, '../src/codegen');
const contractsDir = join(__dirname, '/../contracts');
rimraf(outPath);

const contracts = [
  {
    name: 'Registry',
    dir: join(contractsDir, 'registry')
  },
  {
    name: 'AtomicOrder',
    dir: join(contractsDir, 'atomic-order-example')
  }
];

telescope({
  protoDirs,
  outPath,
  options: {
    prototypes: {
      includePackageVar: false,
      typingsFormat: {
        useExact: false,
        timestamp: 'date',
        duration: 'duration'
      }
    },
    aminoEncoding: {
      enabled: true,
      exceptions: INJECTIVE_AMINO_MAP
    },
    lcdClients: {
      enabled: true
    },
    rpcClients: {
      enabled: true,
      camelCase: true
    },
    cosmwasm: {
      contracts,
      outPath,
      options: {
        bundle: {
          enabled: true,
          bundleFile: 'contracts.ts',
          scope: 'contracts'
        },
        types: {
          enabled: true
        },
        client: {
          enabled: true
        },
        messageComposer: {
          enabled: false
        }
      }
    }
  }
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
  });
