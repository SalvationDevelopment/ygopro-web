// Generated by CoffeeScript 1.6.3
(function() {
  var analyze, constants, duelplayers, handle, hostinfo, k, key, lengths, players, proto_structs, read_srtuct, structs, v, value, _ref;

  constants = {
    "NETWORK": {
      "29736": "SERVER_ID",
      "57078": "CLIENT_ID"
    },
    "NETPLAYER": {
      "0": "TYPE_PLAYER1",
      "1": "TYPE_PLAYER2",
      "2": "TYPE_PLAYER3",
      "3": "TYPE_PLAYER4",
      "4": "TYPE_PLAYER5",
      "5": "TYPE_PLAYER6",
      "7": "TYPE_OBSERVER"
    },
    "CTOS": {
      "1": "RESPONSE",
      "2": "UPDATE_DECK",
      "3": "HAND_RESULT",
      "4": "TP_RESULT",
      "16": "PLAYER_INFO",
      "17": "CREATE_GAME",
      "18": "JOIN_GAME",
      "19": "LEAVE_GAME",
      "20": "SURRENDER",
      "21": "TIME_CONFIRM",
      "22": "CHAT",
      "32": "HS_TODUELIST",
      "33": "HS_TOOBSERVER",
      "34": "HS_READY",
      "35": "HS_NOTREADY",
      "36": "HS_KICK",
      "37": "HS_START"
    },
    "STOC": {
      "1": "GAME_MSG",
      "2": "ERROR_MSG",
      "3": "SELECT_HAND",
      "4": "SELECT_TP",
      "5": "HAND_RESULT",
      "6": "TP_RESULT",
      "7": "CHANGE_SIDE",
      "8": "WAITING_SIDE",
      "17": "CREATE_GAME",
      "18": "JOIN_GAME",
      "19": "TYPE_CHANGE",
      "20": "LEAVE_GAME",
      "21": "DUEL_START",
      "22": "DUEL_END",
      "23": "REPLAY",
      "24": "TIME_LIMIT",
      "25": "CHAT",
      "32": "HS_PLAYER_ENTER",
      "33": "HS_PLAYER_CHANGE",
      "34": "HS_WATCH_CHANGE"
    },
    "PLAYERCHANGE": {
      "8": "OBSERVE",
      "9": "READY",
      "10": "NOTREADY",
      "11": "LEAVE"
    },
    "ERRMSG": {
      "1": "JOINERROR",
      "2": "DECKERROR",
      "3": "SIDEERROR",
      "4": "VERERROR"
    },
    "MODE": {
      "0": "SINGLE",
      "1": "MATCH",
      "2": "TAG"
    },
    "MSG": {
      "1": "RETRY",
      "2": "HINT",
      "3": "WAITING",
      "4": "START",
      "5": "WIN",
      "6": "UPDATE_DATA",
      "7": "UPDATE_CARD",
      "8": "REQUEST_DECK",
      "10": "SELECT_BATTLECMD",
      "11": "SELECT_IDLECMD",
      "12": "SELECT_EFFECTYN",
      "13": "SELECT_YESNO",
      "14": "SELECT_OPTION",
      "15": "SELECT_CARD",
      "16": "SELECT_CHAIN",
      "18": "SELECT_PLACE",
      "19": "SELECT_POSITION",
      "20": "SELECT_TRIBUTE",
      "21": "SORT_CHAIN",
      "22": "SELECT_COUNTER",
      "23": "SELECT_SUM",
      "24": "SELECT_DISFIELD",
      "25": "SORT_CARD",
      "30": "CONFIRM_DECKTOP",
      "31": "CONFIRM_CARDS",
      "32": "SHUFFLE_DECK",
      "33": "SHUFFLE_HAND",
      "34": "REFRESH_DECK",
      "35": "SWAP_GRAVE_DECK",
      "36": "SHUFFLE_SET_CARD",
      "37": "REVERSE_DECK",
      "38": "DECK_TOP",
      "40": "NEW_TURN",
      "41": "NEW_PHASE",
      "50": "MOVE",
      "53": "POS_CHANGE",
      "54": "SET",
      "55": "SWAP",
      "56": "FIELD_DISABLED",
      "60": "SUMMONING",
      "61": "SUMMONED",
      "62": "SPSUMMONING",
      "63": "SPSUMMONED",
      "64": "FLIPSUMMONING",
      "65": "FLIPSUMMONED",
      "70": "CHAINING",
      "71": "CHAINED",
      "72": "CHAIN_SOLVING",
      "73": "CHAIN_SOLVED",
      "74": "CHAIN_END",
      "75": "CHAIN_NEGATED",
      "76": "CHAIN_DISABLED",
      "80": "CARD_SELECTED",
      "81": "RANDOM_SELECTED",
      "83": "BECOME_TARGET",
      "90": "DRAW",
      "91": "DAMAGE",
      "92": "RECOVER",
      "93": "EQUIP",
      "94": "LPUPDATE",
      "95": "UNEQUIP",
      "96": "CARD_TARGET",
      "97": "CANCEL_TARGET",
      "100": "PAY_LPCOST",
      "101": "ADD_COUNTER",
      "102": "REMOVE_COUNTER",
      "110": "ATTACK",
      "111": "BATTLE",
      "112": "ATTACK_DISABLED",
      "113": "DAMAGE_STEP_START",
      "114": "DAMAGE_STEP_END",
      "120": "MISSED_EFFECT",
      "121": "BE_CHAIN_TARGET",
      "122": "CREATE_RELATION",
      "123": "RELEASE_RELATION",
      "130": "TOSS_COIN",
      "131": "TOSS_DICE",
      "140": "ANNOUNCE_RACE",
      "141": "ANNOUNCE_ATTRIB",
      "142": "ANNOUNCE_CARD",
      "143": "ANNOUNCE_NUMBER",
      "160": "CARD_HINT",
      "161": "TAG_SWAP",
      "162": "RELOAD_FIELD",
      "163": "AI_NAME",
      "164": "SHOW_HINT",
      "170": "MATCH_KILL",
      "180": "CUSTOM_MSG"
    },
    "TIMING": {
      "1": "DRAW_PHASE",
      "2": "STANDBY_PHASE",
      "4": "MAIN_END",
      "8": "BATTLE_START",
      "16": "BATTLE_END",
      "32": "END_PHASE",
      "64": "SUMMON",
      "128": "SPSUMMON",
      "256": "FLIPSUMMON",
      "512": "MSET",
      "1024": "SSET",
      "2048": "POS_CHANGE",
      "4096": "ATTACK",
      "8192": "DAMAGE_STEP",
      "16384": "DAMAGE_CAL",
      "32768": "CHAIN_END",
      "65536": "DRAW",
      "131072": "DAMAGE",
      "262144": "RECOVER",
      "524288": "DESTROY",
      "1048576": "REMOVE",
      "2097152": "TOHAND",
      "4194304": "TODECK",
      "8388608": "TOGRAVE",
      "16777216": "BATTLE_PHASE",
      "33554432": "EQUIP"
    }
  };

  structs = {
    "HostInfo": [
      {
        "name": "lflist",
        "type": "unsigned int"
      }, {
        "name": "rule",
        "type": "unsigned char"
      }, {
        "name": "mode",
        "type": "unsigned char"
      }, {
        "name": "enable_priority",
        "type": "bool"
      }, {
        "name": "no_check_deck",
        "type": "bool"
      }, {
        "name": "no_shuffle_deck",
        "type": "bool"
      }, {
        "name": "start_lp",
        "type": "unsigned int"
      }, {
        "name": "start_hand",
        "type": "unsigned char"
      }, {
        "name": "draw_count",
        "type": "unsigned char"
      }, {
        "name": "time_limit",
        "type": "unsigned short"
      }
    ],
    "HostPacket": [
      {
        "name": "identifier",
        "type": "unsigned short"
      }, {
        "name": "version",
        "type": "unsigned short"
      }, {
        "name": "port",
        "type": "unsigned short"
      }, {
        "name": "ipaddr",
        "type": "unsigned int"
      }, {
        "name": "name",
        "type": "unsigned short",
        "length": 20,
        "encoding": "UTF-16LE"
      }, {
        "name": "host",
        "type": "HostInfo"
      }
    ],
    "HostRequest": [
      {
        "name": "identifier",
        "type": "unsigned short"
      }
    ],
    "CTOS_HandResult": [
      {
        "name": "res",
        "type": "unsigned char"
      }
    ],
    "CTOS_TPResult": [
      {
        "name": "res",
        "type": "unsigned char"
      }
    ],
    "CTOS_PlayerInfo": [
      {
        "name": "name",
        "type": "unsigned short",
        "length": 20,
        "encoding": "UTF-16LE"
      }
    ],
    "CTOS_CreateGame": [
      {
        "name": "info",
        "type": "HostInfo"
      }, {
        "name": "name",
        "type": "unsigned short",
        "length": 20,
        "encoding": "UTF-16LE"
      }, {
        "name": "pass",
        "type": "unsigned short",
        "length": 20,
        "encoding": "UTF-16LE"
      }
    ],
    "CTOS_JoinGame": [
      {
        "name": "version",
        "type": "unsigned short"
      }, {
        "name": "gameid",
        "type": "unsigned int"
      }, {
        "name": "some_unknown_mysterious_fucking_thing",
        "type": "unsigned short"
      }, {
        "name": "pass",
        "type": "unsigned short",
        "length": 20,
        "encoding": "UTF-16LE"
      }
    ],
    "CTOS_Kick": [
      {
        "name": "pos",
        "type": "unsigned char"
      }
    ],
    "STOC_ErrorMsg": [
      {
        "name": "msg",
        "type": "unsigned char"
      }, {
        "name": "code",
        "type": "unsigned int"
      }
    ],
    "STOC_HandResult": [
      {
        "name": "res1",
        "type": "unsigned char"
      }, {
        "name": "res2",
        "type": "unsigned char"
      }
    ],
    "STOC_CreateGame": [
      {
        "name": "gameid",
        "type": "unsigned int"
      }
    ],
    "STOC_JoinGame": [
      {
        "name": "info",
        "type": "HostInfo"
      }
    ],
    "STOC_TypeChange": [
      {
        "name": "type",
        "type": "unsigned char"
      }
    ],
    "STOC_ExitGame": [
      {
        "name": "pos",
        "type": "unsigned char"
      }
    ],
    "STOC_TimeLimit": [
      {
        "name": "player",
        "type": "unsigned char"
      }, {
        "name": "left_time",
        "type": "unsigned short"
      }
    ],
    "STOC_Chat": [
      {
        "name": "player",
        "type": "unsigned short"
      }, {
        "name": "msg",
        "type": "unsigned short",
        "length": 255,
        "encoding": "UTF-16LE"
      }
    ],
    "STOC_HS_PlayerEnter": [
      {
        "name": "name",
        "type": "unsigned short",
        "length": 20,
        "encoding": "UTF-16LE"
      }, {
        "name": "pos",
        "type": "unsigned char"
      }
    ],
    "STOC_HS_PlayerChange": [
      {
        "name": "status",
        "type": "unsigned char"
      }
    ],
    "STOC_HS_WatchChange": [
      {
        "name": "watch_count",
        "type": "unsigned short"
      }
    ],
    "deck": [
      {
        "name": "mainc",
        "type": "unsigned int"
      }, {
        "name": "sidec",
        "type": "unsigned int"
      }, {
        "name": "deckbuf",
        "type": "unsigned int",
        "length": 75
      }
    ],
    "chat": [
      {
        "name": "msg",
        "type": "unsigned short",
        "length": "255",
        "encoding": "UTF-16LE"
      }
    ],
    "MSG_START": [
      {
        name: 'playertype',
        type: 'char'
      }, {
        name: 'player_lp',
        type: 'int'
      }, {
        name: 'opponent_lp',
        type: 'int'
      }, {
        name: 'player_deckc',
        type: 'short'
      }, {
        name: 'player_extrac',
        type: 'short'
      }, {
        name: 'opponent_deckc',
        type: 'short'
      }, {
        name: 'opponent_extrac',
        type: 'short'
      }
    ],
    "MSG_DRAW": [
      {
        name: 'player',
        type: 'char'
      }, {
        name: 'count',
        type: 'char'
      }, {
        name: 'pcard',
        type: 'unsigned int',
        length: 'count'
      }
    ]
  };

  lengths = {
    "char": 1,
    "unsigned char": 1,
    "bool": 2,
    "short": 2,
    "unsigned short": 2,
    "int": 4,
    "unsigned int": 4
  };

  proto_structs = {
    CTOS: null,
    STOC: {
      JOIN_GAME: "STOC_JoinGame",
      HS_WATCH_CHANGE: "STOC_HS_WatchChange",
      TYPE_CHANGE: "STOC_TypeChange",
      HS_PLAYER_CHANGE: "STOC_HS_PlayerChange",
      HS_PLAYER_ENTER: "STOC_HS_PlayerEnter",
      ERROR_MSG: "STOC_ErrorMsg",
      CHAT: "STOC_Chat",
      HAND_RESULT: "STOC_HandResult"
    }
  };

  for (key in constants) {
    value = constants[key];
    for (k in value) {
      v = value[k];
      value[v] = parseInt(k);
    }
  }

  _ref = proto_structs.STOC;
  for (key in _ref) {
    value = _ref[key];
    proto_structs.STOC[constants.STOC[key]] = value;
  }

  read_srtuct = function(dataview, type, offset) {
    var field, i, len, length, result, strlen, struct, _i, _len;
    if (offset == null) {
      offset = 0;
    }
    if (struct = structs[type]) {
      result = {};
      for (_i = 0, _len = struct.length; _i < _len; _i++) {
        field = struct[_i];
        length = lengths[field.type];
        if (field.length != null) {
          if (typeof field.length === 'number') {
            len = field.length;
          } else if (result[field.length] != null) {
            len = result[field.length];
          } else {
            throw 'WTF?';
          }
          result[field.name] = (function() {
            var _j, _results;
            _results = [];
            for (i = _j = 0; 0 <= len ? _j < len : _j > len; i = 0 <= len ? ++_j : --_j) {
              _results.push(read_srtuct(dataview, field.type, offset + i * length));
            }
            return _results;
          })();
          offset += len * length;
          if (field.encoding != null) {
            switch (field.encoding) {
              case 'UTF-16LE':
                strlen = result[field.name].indexOf(0);
                if (strlen !== -1) {
                  result[field.name].splice(strlen);
                }
                result[field.name] = String.fromCharCode.apply(this, result[field.name]);
                break;
              default:
                throw 'unsupported encoding';
            }
          }
        } else {
          result[field.name] = read_srtuct(dataview, field.type, offset);
          offset += length;
        }
      }
      return result;
    } else {
      switch (type) {
        case 'char':
          return dataview.getInt8(offset);
        case 'unsigned char':
          return dataview.getUint8(offset);
        case 'bool':
          return dataview.getUint16(offset, true) !== 0;
        case 'short':
          return dataview.getInt16(offset, true);
        case 'unsigned short':
          return dataview.getUint16(offset, true);
        case 'int':
          return dataview.getInt32(offset, true);
        case 'unsigned int':
          return dataview.getUint32(offset, true);
        default:
          throw "unsupported type " + type;
      }
    }
  };

  players = [];

  duelplayers = [];

  hostinfo = null;

  handle = function(proto, dataview, data) {
    var curMsg, type;
    switch (proto) {
      case constants.STOC.JOIN_GAME:
        return hostinfo = data.info;
      case constants.STOC.HS_PLAYER_ENTER:
        return players[data.pos] = {
          name: data.name
        };
      case constants.STOC.HS_PLAYER_CHANGE:
      case constants.TYPE_CHANGE:
        return null;
      case constants.STOC.DUEL_START:
        return console.log('====DUEL_START====', hostinfo, players);
      case constants.STOC.GAME_MSG:
        curMsg = dataview.getUint8(0);
        if (dataview.byteLength - dataview.byteOffset > 1) {
          dataview = new DataView(dataview.buffer, dataview.byteOffset + 1);
        }
        type = 'MSG_' + constants.MSG[curMsg];
        if (type in structs) {
          return analyze(curMsg, dataview, read_srtuct(dataview, type));
        } else {
          return analyze(curMsg, dataview);
        }
    }
  };

  analyze = function(curMsg, dataview, data) {
    switch (curMsg) {
      case constants.MSG.START:
        return console.log('nyaa');
      case constants.MSG.DRAW:
        return null;
    }
  };

  this.Watch = (function() {
    function Watch() {}

    Watch.connect = function(url) {
      var websocket;
      websocket = new WebSocket("ws://122.0.65.69:7922/started");
      websocket.binaryType = "arraybuffer";
      websocket.onopen = function(evt) {
        return console.log("open");
      };
      websocket.onclose = function(evt) {
        return console.log("close");
      };
      websocket.onmessage = function(evt) {
        var dataview, proto, type;
        dataview = new DataView(evt.data, 0);
        proto = dataview.getUint8(0);
        if (dataview.byteLength - dataview.byteOffset > 1) {
          dataview = new DataView(dataview.buffer, dataview.byteOffset + 1);
        }
        console.log('message', constants.STOC[proto]);
        if (type = proto_structs.STOC[proto]) {
          return handle(proto, dataview, read_srtuct(dataview, type));
        } else {
          return handle(proto, dataview);
        }
      };
      return websocket.onerror = function(evt) {
        return console.log('error', evt.data);
      };
    };

    return Watch;

  })();

}).call(this);

/*
//@ sourceMappingURL=watch.map
*/