import * as _111 from "./applications/transfer/v1/genesis";
import * as _112 from "./applications/transfer/v1/query";
import * as _113 from "./applications/transfer/v1/transfer";
import * as _114 from "./applications/transfer/v1/tx";
import * as _115 from "./applications/transfer/v2/packet";
import * as _116 from "./core/channel/v1/channel";
import * as _117 from "./core/channel/v1/genesis";
import * as _118 from "./core/channel/v1/query";
import * as _119 from "./core/channel/v1/tx";
import * as _120 from "./core/client/v1/client";
import * as _121 from "./core/client/v1/genesis";
import * as _122 from "./core/client/v1/query";
import * as _123 from "./core/client/v1/tx";
import * as _124 from "./core/commitment/v1/commitment";
import * as _125 from "./core/connection/v1/connection";
import * as _126 from "./core/connection/v1/genesis";
import * as _127 from "./core/connection/v1/query";
import * as _128 from "./core/connection/v1/tx";
import * as _129 from "./core/port/v1/query";
import * as _130 from "./core/types/v1/genesis";
import * as _131 from "./lightclients/localhost/v1/localhost";
import * as _132 from "./lightclients/solomachine/v1/solomachine";
import * as _133 from "./lightclients/solomachine/v2/solomachine";
import * as _134 from "./lightclients/tendermint/v1/tendermint";
import * as _270 from "./applications/transfer/v1/tx.amino";
import * as _271 from "./core/channel/v1/tx.amino";
import * as _272 from "./core/client/v1/tx.amino";
import * as _273 from "./core/connection/v1/tx.amino";
import * as _274 from "./applications/transfer/v1/tx.registry";
import * as _275 from "./core/channel/v1/tx.registry";
import * as _276 from "./core/client/v1/tx.registry";
import * as _277 from "./core/connection/v1/tx.registry";
import * as _278 from "./applications/transfer/v1/query.lcd";
import * as _279 from "./core/channel/v1/query.lcd";
import * as _280 from "./core/client/v1/query.lcd";
import * as _281 from "./core/connection/v1/query.lcd";
import * as _282 from "./applications/transfer/v1/query.rpc.query";
import * as _283 from "./core/channel/v1/query.rpc.query";
import * as _284 from "./core/client/v1/query.rpc.query";
import * as _285 from "./core/connection/v1/query.rpc.query";
import * as _286 from "./core/port/v1/query.rpc.query";
import * as _287 from "./applications/transfer/v1/tx.rpc.msg";
import * as _288 from "./core/channel/v1/tx.rpc.msg";
import * as _289 from "./core/client/v1/tx.rpc.msg";
import * as _290 from "./core/connection/v1/tx.rpc.msg";
import * as _329 from "./lcd";
import * as _330 from "./rpc.query";
import * as _331 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._111,
        ..._112,
        ..._113,
        ..._114,
        ..._270,
        ..._274,
        ..._278,
        ..._282,
        ..._287
      };
      export const v2 = { ..._115
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._116,
        ..._117,
        ..._118,
        ..._119,
        ..._271,
        ..._275,
        ..._279,
        ..._283,
        ..._288
      };
    }
    export namespace client {
      export const v1 = { ..._120,
        ..._121,
        ..._122,
        ..._123,
        ..._272,
        ..._276,
        ..._280,
        ..._284,
        ..._289
      };
    }
    export namespace commitment {
      export const v1 = { ..._124
      };
    }
    export namespace connection {
      export const v1 = { ..._125,
        ..._126,
        ..._127,
        ..._128,
        ..._273,
        ..._277,
        ..._281,
        ..._285,
        ..._290
      };
    }
    export namespace port {
      export const v1 = { ..._129,
        ..._286
      };
    }
    export namespace types {
      export const v1 = { ..._130
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._131
      };
    }
    export namespace solomachine {
      export const v1 = { ..._132
      };
      export const v2 = { ..._133
      };
    }
    export namespace tendermint {
      export const v1 = { ..._134
      };
    }
  }
  export const ClientFactory = { ..._329,
    ..._330,
    ..._331
  };
}