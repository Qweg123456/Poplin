var Poplin = function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    main_kand9s$f: function (closure$world) {
      return function () {
        closure$world.step();
        closure$world.updateView();
      };
    },
    main_kand9s$: function (args) {
      var message = 'Hello JavaScript!';
      Kotlin.println(message);
      var world = new _.Components.World();
      window.setInterval(_.main_kand9s$f(world), 30);
    },
    Components: Kotlin.definePackage(null, /** @lends _.Components */ {
      Component: Kotlin.createClass(null, function Component() {
        this.r = 0.0;
        this.g = 0.0;
        this.b = 0.0;
        this.rVel = 0.0;
        this.gVel = 0.0;
        this.bVel = 0.0;
        this.rAcc = 0.0;
        this.gAcc = 0.0;
        this.bAcc = 0.0;
        this.maxVel = 3.0;
        this.maxAcc = 1.0;
      }, /** @lends _.Components.Component.prototype */ {
        updateView: function () {
          var tmp$0;
          var css = (tmp$0 = this.view) != null ? tmp$0.style : null;
          css != null ? (css.background = 'rgb(' + Math.round(this.r) + ', ' + Math.round(this.g) + ', ' + Math.round(this.b) + ')') : null;
          Kotlin.println('rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')');
          Kotlin.println(css != null ? css.background : null);
        }
      }),
      World: Kotlin.createClass(function () {
        return [_.Components.Component];
      }, function World() {
        World.baseInitializer.call(this);
        var tmp$0;
        this.view_ravnwg$_0 = Kotlin.isType(tmp$0 = document.getElementsByTagName('body')[0], HTMLElement) ? tmp$0 : Kotlin.throwCCE();
      }, /** @lends _.Components.World.prototype */ {
        view: {
          get: function () {
            return this.view_ravnwg$_0;
          },
          set: function (view_0) {
            this.view_ravnwg$_0 = view_0;
          }
        },
        step: function () {
          this.rAcc = (Math.random() - 0.5) / 1.0;
          this.bAcc = (Math.random() - 0.5) / 1.0;
          this.gAcc = (Math.random() - 0.5) / 1.0;
          this.rAcc = Math.min(this.maxAcc, this.rAcc);
          this.gAcc = Math.min(this.maxAcc, this.gAcc);
          this.bAcc = Math.min(this.maxAcc, this.bAcc);
          this.rAcc = Math.max(-this.maxAcc, this.rAcc);
          this.gAcc = Math.max(-this.maxAcc, this.gAcc);
          this.bAcc = Math.max(-this.maxAcc, this.bAcc);
          this.rVel += this.rAcc;
          this.gVel += this.gAcc;
          this.bVel += this.bAcc;
          this.rVel = Math.min(this.maxVel, this.rVel);
          this.gVel = Math.min(this.maxVel, this.gVel);
          this.bVel = Math.min(this.maxVel, this.bVel);
          this.rVel = Math.max(-this.maxVel, this.rVel);
          this.gVel = Math.max(-this.maxVel, this.gVel);
          this.bVel = Math.max(-this.maxVel, this.bVel);
          this.rVel *= 0.995;
          this.gVel *= 0.995;
          this.bVel *= 0.995;
          this.r += this.rVel;
          this.g += this.gVel;
          this.b += this.bVel;
          this.r = Math.min(200.0, this.r);
          this.g = Math.min(200.0, this.g);
          this.b = Math.min(200.0, this.b);
          this.r = Math.max(50.0, this.r);
          this.g = Math.max(50.0, this.g);
          this.b = Math.max(50.0, this.b);
          Kotlin.println('rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')');
          Kotlin.println('rgbVel(' + this.rVel + ', ' + this.gVel + ', ' + this.bVel + ')');
          Kotlin.println('rgbAcc(' + this.rAcc + ', ' + this.gAcc + ', ' + this.bAcc + ')');
        }
      })
    })
  });
  Kotlin.defineModule('Poplin', _);
  _.main_kand9s$([]);
  return _;
}(kotlin);
