
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/cart/cart","pages/my/my","pages/user-set/user-set","pages/user-info/user-info","pages/user-path-list/user-path-list","pages/user-path-edit/user-path-edit","pages/test/test","pages/class/class","pages/login/login","pages/register/register","pages/search/search","pages/search-list/search-list","pages/order/order","pages/order-comfirm/order-comfirm","pages/pay-methods/pay-methods","pages/pay-result/pay-result","pages/order-detail/order-detail","pages/about/about","pages/logis-detail/logis-detail","pages/detail/detail"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"蔬菜批发","navigationBarBackgroundColor":"#ffffff","backgroundColor":"#ffffff"},"tabBar":{"color":"#b5b5b5","selectedColor":"#45c36f","borderStyle":"white","backgroundColor":"#F6F7F9","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"/static/tabbars/index.png","selectedIconPath":"static/tabbars/indexed.png"},{"pagePath":"pages/class/class","text":"分类","iconPath":"/static/tabbars/class.png","selectedIconPath":"static/tabbars/classed.png"},{"pagePath":"pages/cart/cart","text":"购物车","iconPath":"/static/tabbars/car.png","selectedIconPath":"/static/tabbars/cared.png"},{"pagePath":"pages/my/my","text":"我的","iconPath":"/static/tabbars/me.png","selectedIconPath":"/static/tabbars/meed.png"}]},"nvueCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"pifashu1","compilerVersion":"2.7.14","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"bounce":"none","scrollIndicator":"none","titleNView":{"backgroundColor":"#45c36f","searchInput":{"align":"left","backgroundColor":"#ffffff","borderRadius":"40px","disabled":true,"placeholder":"搜一搜","placeholderColor":"#cccccc"},"buttons":[{"color":"#ffffff","colorPressed":"#ffffff","float":"left","fontSize":"22px","fontSrc":"/static/iconfont.ttf","text":""},{"color":"#ffffff","colorPressed":"#ffffff","float":"right","fontSize":"22px","fontSrc":"/static/iconfont.ttf","text":""},{"color":"#ffffff","colorPressed":"#ffffff","float":"right","fontSize":"22px","fontSrc":"/static/iconfont.ttf","text":""}]}}},{"path":"/pages/cart/cart","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":false,"scrollIndicator":"none","bounce":"none"}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":false,"scrollIndicator":"none","bounce":"none"}},{"path":"/pages/user-set/user-set","meta":{},"window":{"navigationBarTitleText":"设置"}},{"path":"/pages/user-info/user-info","meta":{},"window":{"navigationBarTitleText":"修改资料"}},{"path":"/pages/user-path-list/user-path-list","meta":{},"window":{"navigationBarTitleText":"收货地址","titleNView":{"buttons":[{"color":"#333333","colorPressed":"#fd597c","float":"right","fontSize":"20px","fontSrc":"/static/iconfont.ttf","text":""}]}}},{"path":"/pages/user-path-edit/user-path-edit","meta":{},"window":{"navigationBarTitleText":"添加收货地址","titleNView":{},"scrollIndicator":"none","bounce":"none"}},{"path":"/pages/test/test","meta":{},"window":{}},{"path":"/pages/class/class","meta":{"isQuit":true,"isTabBar":true},"window":{"bounce":"none","scrollIndicator":"none","titleNView":{"backgroundColor":"#ffffff","searchInput":{"align":"left","backgroundColor":"#f7f7f7","borderRadius":"4px","disabled":true,"placeholder":"搜一搜","placeholderColor":"#cccccc"}}}},{"path":"/pages/login/login","meta":{},"window":{"bounce":"none","scrollIndicator":"none","titleNView":false}},{"path":"/pages/register/register","meta":{},"window":{"titleNView":false}},{"path":"/pages/search/search","meta":{},"window":{"scrollIndicator":"none","titleNView":{"searchInput":{"align":"left","backgroundColor":"#f7f7f7","borderRadius":"4px","disabled":false,"placeholder":"新鲜包菜","placeholderColor":"#cccccc"},"buttons":[{"color":"#989898","colorPressed":"#45c36f","float":"right","fontSize":"16px","text":"搜索"}]}}},{"path":"/pages/search-list/search-list","meta":{},"window":{"scrollIndicator":"none","titleNView":{"searchInput":{"align":"left","backgroundColor":"#f7f7f7","borderRadius":"4px","disabled":false,"placeholder":"新鲜包菜","placeholderColor":"#cccccc"},"buttons":[{"color":"#989898","colorPressed":"#45c36f","float":"right","fontSize":"16px","text":"搜索"}]}}},{"path":"/pages/order/order","meta":{},"window":{"navigationBarTitleText":"我的订单","scrollIndicator":"none"}},{"path":"/pages/order-comfirm/order-comfirm","meta":{},"window":{"navigationBarTitleText":"订单配送至","navigationBarBackgroundColor":"#45C36F","navigationBarTextStyle":"white"}},{"path":"/pages/pay-methods/pay-methods","meta":{},"window":{"navigationBarTitleText":"选择支付方式"}},{"path":"/pages/pay-result/pay-result","meta":{},"window":{"navigationBarTitleText":"支付成功"}},{"path":"/pages/order-detail/order-detail","meta":{},"window":{"bounce":"none","titleNView":{"type":"transparent"}}},{"path":"/pages/about/about","meta":{},"window":{"navigationBarTitleText":"关于"}},{"path":"/pages/logis-detail/logis-detail","meta":{},"window":{"navigationBarTitleText":"物流详情"}},{"path":"/pages/detail/detail","meta":{},"window":{"navigationBarTitleText":"商品详情","scrollIndicator":"none","bounce":"none","titleNView":{"type":"transparent","buttons":[{"type":"menu"}]}}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
