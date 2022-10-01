import * as _135 from "./auction/v1beta1/auction";
import * as _136 from "./auction/v1beta1/genesis";
import * as _137 from "./auction/v1beta1/query";
import * as _138 from "./auction/v1beta1/tx";
import * as _139 from "./crypto/v1beta1/ethsecp256k1/keys";
import * as _140 from "./exchange/v1beta1/authz";
import * as _141 from "./exchange/v1beta1/events";
import * as _142 from "./exchange/v1beta1/exchange";
import * as _143 from "./exchange/v1beta1/genesis";
import * as _144 from "./exchange/v1beta1/query";
import * as _145 from "./exchange/v1beta1/tx";
import * as _146 from "./insurance/v1beta1/genesis";
import * as _147 from "./insurance/v1beta1/insurance";
import * as _148 from "./insurance/v1beta1/query";
import * as _149 from "./insurance/v1beta1/tx";
import * as _150 from "./ocr/v1beta1/genesis";
import * as _151 from "./ocr/v1beta1/ocr";
import * as _152 from "./ocr/v1beta1/query";
import * as _153 from "./ocr/v1beta1/tx";
import * as _154 from "./oracle/v1beta1/events";
import * as _155 from "./oracle/v1beta1/genesis";
import * as _156 from "./oracle/v1beta1/oracle";
import * as _157 from "./oracle/v1beta1/proposal";
import * as _158 from "./oracle/v1beta1/query";
import * as _159 from "./oracle/v1beta1/tx";
import * as _160 from "./peggy/v1/attestation";
import * as _161 from "./peggy/v1/batch";
import * as _162 from "./peggy/v1/ethereum_signer";
import * as _163 from "./peggy/v1/events";
import * as _164 from "./peggy/v1/genesis";
import * as _165 from "./peggy/v1/msgs";
import * as _166 from "./peggy/v1/pool";
import * as _167 from "./peggy/v1/proposal";
import * as _168 from "./peggy/v1/query";
import * as _169 from "./peggy/v1/types";
import * as _170 from "./types/v1beta1/account";
import * as _171 from "./types/v1beta1/tx_ext";
import * as _172 from "./types/v1beta1/tx_response";
import * as _173 from "./wasmx/v1/genesis";
import * as _174 from "./wasmx/v1/query";
import * as _175 from "./wasmx/v1/tx";
import * as _176 from "./wasmx/v1/wasmx";
import * as _291 from "./auction/v1beta1/tx.amino";
import * as _292 from "./exchange/v1beta1/tx.amino";
import * as _293 from "./insurance/v1beta1/tx.amino";
import * as _294 from "./ocr/v1beta1/tx.amino";
import * as _295 from "./oracle/v1beta1/tx.amino";
import * as _296 from "./peggy/v1/msgs.amino";
import * as _297 from "./auction/v1beta1/tx.registry";
import * as _298 from "./exchange/v1beta1/tx.registry";
import * as _299 from "./insurance/v1beta1/tx.registry";
import * as _300 from "./ocr/v1beta1/tx.registry";
import * as _301 from "./oracle/v1beta1/tx.registry";
import * as _302 from "./peggy/v1/msgs.registry";
import * as _303 from "./auction/v1beta1/query.lcd";
import * as _304 from "./exchange/v1beta1/query.lcd";
import * as _305 from "./insurance/v1beta1/query.lcd";
import * as _306 from "./ocr/v1beta1/query.lcd";
import * as _307 from "./oracle/v1beta1/query.lcd";
import * as _308 from "./peggy/v1/query.lcd";
import * as _309 from "./wasmx/v1/query.lcd";
import * as _310 from "./auction/v1beta1/query.rpc.query";
import * as _311 from "./exchange/v1beta1/query.rpc.query";
import * as _312 from "./insurance/v1beta1/query.rpc.query";
import * as _313 from "./ocr/v1beta1/query.rpc.query";
import * as _314 from "./oracle/v1beta1/query.rpc.query";
import * as _315 from "./peggy/v1/query.rpc.query";
import * as _316 from "./wasmx/v1/query.rpc.query";
import * as _317 from "./auction/v1beta1/tx.rpc.msg";
import * as _318 from "./exchange/v1beta1/tx.rpc.msg";
import * as _319 from "./insurance/v1beta1/tx.rpc.msg";
import * as _320 from "./ocr/v1beta1/tx.rpc.msg";
import * as _321 from "./oracle/v1beta1/tx.rpc.msg";
import * as _322 from "./peggy/v1/msgs.rpc.msg";
import * as _332 from "./lcd";
import * as _333 from "./rpc.query";
import * as _334 from "./rpc.tx";
export namespace injective {
  export namespace auction {
    export const v1beta1 = { ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._291,
      ..._297,
      ..._303,
      ..._310,
      ..._317
    };
  }
  export namespace crypto {
    export namespace v1beta1 {
      export const ethsecp256k1 = { ..._139
      };
    }
  }
  export namespace exchange {
    export const v1beta1 = { ..._140,
      ..._141,
      ..._142,
      ..._143,
      ..._144,
      ..._145,
      ..._292,
      ..._298,
      ..._304,
      ..._311,
      ..._318
    };
  }
  export namespace insurance {
    export const v1beta1 = { ..._146,
      ..._147,
      ..._148,
      ..._149,
      ..._293,
      ..._299,
      ..._305,
      ..._312,
      ..._319
    };
  }
  export namespace ocr {
    export const v1beta1 = { ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._294,
      ..._300,
      ..._306,
      ..._313,
      ..._320
    };
  }
  export namespace oracle {
    export const v1beta1 = { ..._154,
      ..._155,
      ..._156,
      ..._157,
      ..._158,
      ..._159,
      ..._295,
      ..._301,
      ..._307,
      ..._314,
      ..._321
    };
  }
  export namespace peggy {
    export const v1 = { ..._160,
      ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._166,
      ..._167,
      ..._168,
      ..._169,
      ..._296,
      ..._302,
      ..._308,
      ..._315,
      ..._322
    };
  }
  export namespace types {
    export const v1beta1 = { ..._170,
      ..._171,
      ..._172
    };
  }
  export namespace wasmx {
    export const v1 = { ..._173,
      ..._174,
      ..._175,
      ..._176,
      ..._309,
      ..._316
    };
  }
  export const ClientFactory = { ..._332,
    ..._333,
    ..._334
  };
}