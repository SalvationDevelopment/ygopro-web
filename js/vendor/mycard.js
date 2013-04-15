// Generated by CoffeeScript 1.6.2
(function() {
  this.mycard = (function() {
    function mycard() {}

    mycard.locale = 'zh';

    mycard.types = ['warrior', 'spellcaster', 'fairy', 'fiend', 'zombie', 'machine', 'aqua', 'pyro', 'rock', 'winged_beast', 'plant', 'insect', 'thunder', 'dragon', 'beast', 'beast_warrior', 'dinosaur', 'fish', 'sea_serpent', 'reptile', 'psychic', 'divine_beast', 'creator_god'];

    mycard._attributes = ['earth', 'water', 'fire', 'wind', 'light', 'dark', 'divine'];

    mycard.categories = ['monster', 'spell', 'trap'];

    mycard.card_types = [null, null, null, null, 'normal', 'effect', 'fusion', 'ritual', null, 'spirit', 'union', 'gemini', 'tuner', 'synchro', null, null, 'quick_play', 'continuous', 'equip', 'field', 'counter', 'flip', 'toon', 'xyz'];

    mycard.card_types_extra = ['fusion', 'synchro', 'xyz'];

    mycard.cards_url = "http://my-card.in/cards";

    mycard.cards_locale_url = "http://my-card.in/cards_" + mycard.locale;

    mycard.fetch_cards = function(query, callback) {
      var _this = this;

      return $.when($.getJSON(this.cards_url + '?q=' + JSON.stringify({
        _id: {
          $in: query
        }
      })), $.getJSON(this.cards_locale_url + '?q=' + JSON.stringify({
        _id: {
          $in: query
        }
      }))).done(function(cards, langs) {
        return callback(_this.load_cards(cards[0], langs[0]));
      });
    };

    mycard.load_cards = function(cards, langs) {
      var card, lang, result, _i, _j, _len, _len1;

      result = [];
      for (_i = 0, _len = langs.length; _i < _len; _i++) {
        lang = langs[_i];
        for (_j = 0, _len1 = cards.length; _j < _len1; _j++) {
          card = cards[_j];
          if (card._id === lang._id) {
            result.push(this.load_card(card, lang));
            break;
          }
        }
      }
      return result;
    };

    mycard.load_card = function(card, lang) {
      var card_type, category, i;

      i = 0;
      while (card.type) {
        if (card.type & 1) {
          if (this.card_types[i]) {
            card_type = this.card_types[i];
          }
          if (this.categories[i]) {
            category = this.categories[i];
          }
        }
        card.type >>= 1;
        i++;
      }
      return {
        id: card._id,
        alias: card.alias,
        name: lang.name,
        category: category,
        card_type: card_type,
        type: card.race ? (i = 0, (function() {
          var _results;

          _results = [];
          while (!(card.race >> i & 1)) {
            _results.push(i++);
          }
          return _results;
        })(), this.types[i]) : void 0,
        attribute: card.attribute ? (i = 0, (function() {
          var _results;

          _results = [];
          while (!(card.attribute >> i & 1)) {
            _results.push(i++);
          }
          return _results;
        })(), this._attributes[i]) : void 0,
        level: card.attribute ? card.level : void 0,
        atk: card.attribute ? card.atk : void 0,
        def: card.attribute ? card.def : void 0,
        description: lang.desc
      };
    };

    mycard.load_replay = function(id, callback) {
      return $.getJSON("https://my-card.in/replays/" + id + ".json", function(replay) {
        return callback(replay);
      });
    };

    mycard.load_replay_comments = function(id, skip, limit, callback) {
      if (skip == null) {
        skip = 0;
      }
      if (limit == null) {
        limit = 0;
      }
      return $.getJSON("https://my-card.in/replays/" + id + "/comments?limit=" + limit + "&skip=" + skip, function(comments) {
        return callback(comments);
      });
    };

    mycard.new_replay_comment = function(comment, callback) {
      return $.post("https://my-card.in/replays/" + comment.duel_id + "/comments", comment, callback);
    };

    return mycard;

  })();

}).call(this);
