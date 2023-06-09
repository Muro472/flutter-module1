// Generated by DDC, the Dart Development Compiler (to JavaScript).
// Version: 2.19.2 (stable) (Tue Feb 7 18:37:17 2023 +0000) on "linux_x64"
// Module: zapp_user_main
// Flags: soundNullSafety(true), enableAsserts(true)
define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = flutter_sdk.src__material__app;
  const theme_data = flutter_sdk.src__material__theme_data;
  const colors = flutter_sdk.src__material__colors;
  const framework = flutter_sdk.src__widgets__framework;
  const scaffold = flutter_sdk.src__material__scaffold;
  const app_bar = flutter_sdk.src__material__app_bar;
  const text = flutter_sdk.src__widgets__text;
  const basic = flutter_sdk.src__widgets__basic;
  const flex = flutter_sdk.src__rendering__flex;
  const elevated_button = flutter_sdk.src__material__elevated_button;
  const container = flutter_sdk.src__widgets__container;
  const edge_insets = flutter_sdk.src__painting__edge_insets;
  const box_decoration = flutter_sdk.src__painting__box_decoration;
  const border_radius = flutter_sdk.src__painting__border_radius;
  const image = flutter_sdk.src__widgets__image;
  const image_resolution = flutter_sdk.src__painting__image_resolution;
  const text_style = flutter_sdk.src__painting__text_style;
  const binding = flutter_sdk.src__widgets__binding;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var $toString = dartx.toString;
  var $_get = dartx._get;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: main.MyHomePage.prototype,
        [Widget_key]: null,
        [MyHomePage_title]: "Band cards"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: main.MyApp.prototype,
        [Widget_key]: null
      });
    }
  }, false);
  var C = Array(3).fill(void 0);
  var I = ["file:///zapp/project/lib/main.dart"];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T.VoidToNull())});
    });
  };
  var Widget_key = dart.privateName(framework, "Widget.key");
  var MyHomePage_title = dart.privateName(main, "MyHomePage.title");
  main.MyApp = class MyApp extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new main.MyApp.new({key: key});
    }
    build(context) {
      return new app.MaterialApp.new({theme: theme_data.ThemeData.new({colorSchemeSeed: colors.Colors.indigo, useMaterial3: true, brightness: ui.Brightness.light}), darkTheme: theme_data.ThemeData.new({colorSchemeSeed: colors.Colors.blue, useMaterial3: true, brightness: ui.Brightness.dark}), home: C[1] || CT.C1, debugShowCheckedModeBanner: false});
    }
  };
  (main.MyApp.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    main.MyApp.__proto__.new.call(this, {key: key});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.addTypeCaches(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, I[0]);
  const title$ = MyHomePage_title;
  main.MyHomePage = class MyHomePage extends framework.StatefulWidget {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let title = opts && 'title' in opts ? opts.title : null;
      return new main.MyHomePage.new({key: key, title: title});
    }
    createState() {
      return new main._MyHomePageState.new();
    }
  };
  (main.MyHomePage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let title = opts && 'title' in opts ? opts.title : null;
    this[title$] = title;
    main.MyHomePage.__proto__.new.call(this, {key: key});
    ;
  }).prototype = main.MyHomePage.prototype;
  dart.addTypeTests(main.MyHomePage);
  dart.addTypeCaches(main.MyHomePage);
  dart.setMethodSignature(main.MyHomePage, () => ({
    __proto__: dart.getMethods(main.MyHomePage.__proto__),
    createState: dart.fnType(framework.State$(main.MyHomePage), [])
  }));
  dart.setLibraryUri(main.MyHomePage, I[0]);
  dart.setFieldSignature(main.MyHomePage, () => ({
    __proto__: dart.getFields(main.MyHomePage.__proto__),
    title: dart.finalFieldType(core.String)
  }));
  var _counter = dart.privateName(main, "_counter");
  var _maxCards = dart.privateName(main, "_maxCards");
  var _incrementCounter = dart.privateName(main, "_incrementCounter");
  var _unIncrementCounter = dart.privateName(main, "_unIncrementCounter");
  main._MyHomePageState = class _MyHomePageState extends framework.State$(main.MyHomePage) {
    [_incrementCounter]() {
      this.setState(dart.fn(() => {
        if (this[_counter] >= 3) {
          this[_counter] = 0;
        } else {
          this[_counter] = this[_counter] + 1;
        }
      }, T.VoidTovoid()));
    }
    [_unIncrementCounter]() {
      this.setState(dart.fn(() => {
        if (this[_counter] <= 0) {
          this[_counter] = 3;
        } else {
          this[_counter] = this[_counter] - 1;
        }
      }, T.VoidTovoid()));
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new(this.widget.title)}), body: new basic.Center.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidget().of([new main.ImageTextWidget.new({imageUrl: this.cardImages[$_get](this[_counter]), text: this.cardText[$_get](this[_counter])}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: T.JSArrayOfWidget().of([new elevated_button.ElevatedButton.new({onPressed: dart.bind(this, _unIncrementCounter), child: new text.Text.new("previous")}), new elevated_button.ElevatedButton.new({onPressed: dart.bind(this, _incrementCounter), child: new text.Text.new("next")})])})])})})});
    }
    static ['_#new#tearOff']() {
      return new main._MyHomePageState.new();
    }
  };
  (main._MyHomePageState.new = function() {
    this[_counter] = 0;
    this[_maxCards] = 3;
    this.cardImages = T.JSArrayOfString().of(["assets/m.jpeg", "assets/n.jpeg", "assets/o.jpeg", "assets/s.jpeg"]);
    this.cardText = T.JSArrayOfString().of(["This is metallica", "This is nirvana", "This is opeth", "This is slipknot"]);
    main._MyHomePageState.__proto__.new.call(this);
    ;
  }).prototype = main._MyHomePageState.prototype;
  dart.addTypeTests(main._MyHomePageState);
  dart.addTypeCaches(main._MyHomePageState);
  dart.setMethodSignature(main._MyHomePageState, () => ({
    __proto__: dart.getMethods(main._MyHomePageState.__proto__),
    [_incrementCounter]: dart.fnType(dart.void, []),
    [_unIncrementCounter]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main._MyHomePageState, I[0]);
  dart.setFieldSignature(main._MyHomePageState, () => ({
    __proto__: dart.getFields(main._MyHomePageState.__proto__),
    [_counter]: dart.fieldType(core.int),
    [_maxCards]: dart.fieldType(core.int),
    cardImages: dart.fieldType(core.List$(core.String)),
    cardText: dart.fieldType(core.List$(core.String))
  }));
  var imageUrl$ = dart.privateName(main, "ImageTextWidget.imageUrl");
  var text$ = dart.privateName(main, "ImageTextWidget.text");
  main.ImageTextWidget = class ImageTextWidget extends framework.StatelessWidget {
    get imageUrl() {
      return this[imageUrl$];
    }
    set imageUrl(value) {
      super.imageUrl = value;
    }
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    static ['_#new#tearOff'](opts) {
      let imageUrl = opts && 'imageUrl' in opts ? opts.imageUrl : null;
      let text = opts && 'text' in opts ? opts.text : null;
      return new main.ImageTextWidget.new({imageUrl: imageUrl, text: text});
    }
    build(context) {
      return new container.Container.new({padding: new edge_insets.EdgeInsets.all(16), decoration: new box_decoration.BoxDecoration.new({color: colors.Colors.indigo, borderRadius: new border_radius.BorderRadius.circular(10)}), child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.center, children: T.JSArrayOfWidget().of([new image.Image.new({image: new image_resolution.AssetImage.new(this.imageUrl)}), new basic.SizedBox.new({height: 10}), new text.Text.new(this.text, {style: new text_style.TextStyle.new({fontSize: 20})})])})});
    }
  };
  (main.ImageTextWidget.new = function(opts) {
    let imageUrl = opts && 'imageUrl' in opts ? opts.imageUrl : null;
    let text = opts && 'text' in opts ? opts.text : null;
    this[imageUrl$] = imageUrl;
    this[text$] = text;
    main.ImageTextWidget.__proto__.new.call(this);
    ;
  }).prototype = main.ImageTextWidget.prototype;
  dart.addTypeTests(main.ImageTextWidget);
  dart.addTypeCaches(main.ImageTextWidget);
  dart.setMethodSignature(main.ImageTextWidget, () => ({
    __proto__: dart.getMethods(main.ImageTextWidget.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.ImageTextWidget, I[0]);
  dart.setFieldSignature(main.ImageTextWidget, () => ({
    __proto__: dart.getFields(main.ImageTextWidget.__proto__),
    imageUrl: dart.finalFieldType(core.String),
    text: dart.finalFieldType(core.String)
  }));
  main.main = function main$0() {
    binding.runApp(C[2] || CT.C2);
  };
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2CI,IA1BF,iCAAgB;AACd,UAAoB,6BAGD;AAF8B,QAA9B,AAAkB,6BAElB,eAF2B;;AAEL,QAAF,CAApB;;AAEnB,UAAO,AAAQ,uBAAY;AAKvB,QAJK,AAAqC,qBAA7B,qCAAuB,uBAAW,QAAC;AAG9C,UAFC,AAAQ,sBAAW,2BAA2B,CAC/C;;;wBAIL,SAAC,GAAG;AACL,UAAO,AAAQ,uBAAY;AAIvB,QAHC,AAAQ,sBAAW,wBAAwB,CAC5C,AAAE,CAAD,eACD,AAAW,UAAD;;2DAGM,yCACb,SAAC,MAAM,QAAQ,MAAM;AAC1B,cAAO,AAAQ,uBAAY;AAC4B,YAAlD,AAAQ,sBAAW,wBAAwB,CAAC,IAAI;;;EAI3D;;AAEiB;AAQd,MAPD,MAAS,gCACC;AACS,UAAf;6CAEe;AACmB,UAAjB;;IAGvB;;;;;;;;;UC7C4B;AACxB,YAAO,iCACE,2CACmB,oCACV,kBACS,kCAEd,2CACe,kCACV,kBACS,uEAGG;IAEhC;;;QAlBmB;AAAb,8CAAa,GAAG;;EAAE;;;;;;;;;;IAwBX;;;;;;;;;;;;AAGsB;IAAkB;;;QAL7B;QAAmB;;AAArC,mDAAkB,GAAG;;EAAuB;;;;;;;;;;;;;;;;;;AAuB9C,MANF,cAAS;AACP,YAAG,AAAS,kBAAG;AACD,UAAZ,iBAAW;;AAED,UAAV,iBAAA,AAAQ,iBAAA;;;IAGd;;AASM,MANF,cAAS;AACP,YAAG,AAAS,kBAAG;AACF,UAAZ,iBAAW;;AAEA,UAAV,iBAAA,AAAQ,iBAAA;;;IAGd;UAGwB;AAExB,YAAO,oCACG,+BAEC,kBAAK,AAAO,4BAEf,6BAEG,yCAEgC,yCACnB,wBACf,wCACW,AAAU,uBAAC,uBACf,AAAQ,qBAAC,mBAEjB,sCAC+B,8CAC3B,wBAER,6DACa,mCACJ,kBAAK,eAEd,6DACa,iCACJ,kBAAK;IAQpB;;;;;;IA/DI,iBAAW;IACX,kBAAY;IAEZ,kBAAa,wBAAC,iBAAgB,iBAAgB,iBAAgB;IAC9D,gBAAW,wBAAC,qBAAoB,mBAAkB,iBAAgB;;;EA4DxE;;;;;;;;;;;;;;;;;;;;IAGe;;;;;;IACA;;;;;;;;;;;UAKa;AACxB,YAAO,uCACe,+BAAI,iBACZ,6CACI,oCACa,wCAAS,cAE9B,0CAC+B,0CACrB,wBAChB,4BACS,oCAAW,kBAEpB,gCAAiB,MACjB,kBACE,mBACO,wCAAoB;IAKnC;;;QAxB+B;QAAwB;IAAxB;IAAwB;AAAvD;;EAA6D;;;;;;;;;;;;;;AAzGxC,IAArB;EACF;;ECGwB","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant
  };
}));

//# sourceMappingURL=main.js.map
