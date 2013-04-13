// Generated by CoffeeScript 1.6.2
(function() {
  var Card, Duel, Replay, _ref, _ref1,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Card = (function(_super) {
    __extends(Card, _super);

    function Card() {
      _ref = Card.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Card.fetch = function(cards_id) {
      return mycard.fetch_cards(cards_id, function(cards) {
        return Card.refresh(cards);
      });
    };

    return Card;

  })(Spine.Model);

  Duel = (function(_super) {
    __extends(Duel, _super);

    function Duel() {
      _ref1 = Duel.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    Duel.prototype.events = {
      "mouseover .game_card": "show"
    };

    Duel.avatar_url = 'http://my-card.in/users/:name.png';

    Duel.prototype.show = function(event) {
      var id;

      id = $(event.target).tmplItem().data.card_info.card_id;
      $('.card_image').replaceWith($('#card_image_template').tmpl({
        id: id
      }));
      return $('#card').html($('#card_template').tmpl(Card.find(id)));
    };

    Duel.prototype.set_player_name = function(name) {
      return this.set_name('player', name);
    };

    Duel.prototype.set_opponent_name = function(name) {
      return this.set_name('opponent', name);
    };

    Duel.prototype.set_player_lp = function(lp) {
      return this.set_lp('player', lp);
    };

    Duel.prototype.set_opponent_lp = function(lp) {
      return this.set_lp('opponent', lp);
    };

    Duel.prototype.set_phase = function(phase) {
      var phases;

      phases = {
        DP: '抽卡阶段',
        SP: '准备阶段',
        M1: '主要阶段1',
        BP: '战斗阶段',
        M2: '主要阶段2',
        EP: '结束阶段'
      };
      humane.remove();
      humane.log(phases[phase], {
        timeout: 800
      });
      $(".phase[data-phase!=" + phase + "]").removeClass('active');
      return $(".phase[data-phase=" + phase + "]").addClass('active');
    };

    Duel.prototype.set_turn = function(turn) {
      $('#turn').html(turn);
      if (turn % 2) {
        $('.phase').addClass('btn-info');
        return $('.phase').removeClass('btn-danger');
      } else {
        $('.phase').removeClass('btn-info');
        return $('.phase').addClass('btn-danger');
      }
    };

    Duel.prototype.set_name = function(player, name) {
      $("#" + player + "_name").html(name);
      return $("#" + player + "_avatar").attr('src', Duel.avatar_url.replace(':name', name));
    };

    Duel.prototype.set_lp = function(player, lp) {
      if (typeof lp === "string") {
        if (lp.slice(0, 2) === '+=') {
          lp = parseInt($("#" + player + "_lp").html()) + parseInt(lp.slice(2));
        } else if (lp.slice(0, 2) === '-=') {
          lp = parseInt($("#" + player + "_lp").html()) - parseInt(lp.slice(2));
        } else {
          lp = parseInt(lp);
        }
      }
      $("#" + player + "_lp").html(lp);
      return $("#" + player + "_lp_bar").animate({
        'width': "" + ((lp <= 0 ? 0 : lp >= 8000 ? 1 : lp / 8000) * 100) + "%"
      });
    };

    return Duel;

  })(Spine.Controller);

  Replay = (function() {
    Replay.prototype.speed = $('#setting_action_inteval').val();

    Replay.prototype.duel_id = null;

    Replay.prototype.action_id = 0;

    Replay.prototype.comments = [];

    function Replay(duel_id) {
      var _this = this;

      this.duel_id = duel_id;
      $('.new_comment')[0].duel_id.value = this.duel_id;
      $('.new_comment').ajaxForm({
        url: "https://my-card.in/duels/" + this.duel_id + "/comments",
        type: "POST",
        success: function(data) {
          return console.log("commented successful");
        }
      });
      mycard.load_duel_comments(duel_id, 0, 0, function(comments) {
        var comment, _i, _len, _ref2, _results;

        _this.comments = comments;
        _ref2 = _this.comments;
        _results = [];
        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
          comment = _ref2[_i];
          if (comment.action_id === _this.action_id) {
            _results.push(_this.show_comment(comment));
          }
        }
        return _results;
      });
    }

    Replay.prototype.get_action_inteval = function() {
      return Math.pow(10, 4 - $('#setting_action_inteval').val() * 0.2);
    };

    Replay.prototype.set_action_id = function(action_id) {
      var comment, _i, _len, _ref2, _results;

      this.action_id = action_id;
      $('.new_comment')[0].action_id.value = this.action_id;
      _ref2 = this.comments;
      _results = [];
      for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
        comment = _ref2[_i];
        if (comment.action_id === action_id) {
          _results.push(this.show_comment(comment));
        }
      }
      return _results;
    };

    Replay.prototype.show_comment = function(comment) {
      return console.log(comment);
    };

    return Replay;

  })();

  this.duel = new Duel({
    el: $('.stage')
  });

  this.replay = new Replay(parseInt($.url().param('rname')));

  this.Card = Card;

  $('.side_tabs').tabs();

  $('#setting_action_inteval_slider').slider({
    min: 1,
    max: 10,
    value: $("#setting_action_inteval").val(),
    slide: function(event, ui) {
      return $("#setting_action_inteval").val(ui.value);
    }
  });

  $('#setting_enable_3d').change(function() {
    if (this.checked) {
      return $('.field').transition({
        scale: 2,
        translate: [116, 40],
        rotateX: 45
      });
    } else {
      return $('.field').transition({
        scale: 2,
        translate: [116, 40],
        rotateX: 0
      });
    }
  });

  $.i18n.properties({
    name: 'card',
    path: 'locales/',
    mode: 'both'
  });

  $(document).ready(function() {
    return $('#setting_enable_3d').change();
  });

  $('.zone').each(function(index, element) {
    return $(element).data('card_list', []);
  });

}).call(this);
