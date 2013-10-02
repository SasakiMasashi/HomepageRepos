(function(){

Ext.Loader.setPath({
    'Ext.ux': 'ux/',
    'Ext.app': 'portal/classes/'
});

Ext.require([
    'Ext.Viewport',
    'Ext.data.JsonStore',
    'Ext.tip.QuickTipManager',
    'Ext.tab.Panel',
    'Ext.ux.GroupTabPanel',
    'Ext.grid.*',
    'Ext.app.PortalColumn',
    'Ext.app.PortalDropZone',
    'Ext.app.Portlet',
    'Ext.app.GridPortlet',
    'Ext.app.PortalPanel',
    'Ext.app.ChartPortlet'
]);

var createLink = function(message, url){
	var a = $("<a>").attr("href", url)
					.attr("target", "_blank")
	                .text(message);
	return a;
};

var createItem = function(message, id){
	return {
  		title: message,
  		closable: false,
  		html: ''
	};
};

var contentBoxCreator = function(title, id){
	this.id = id;
	
	this.header = $("<div>").append(title)
							.css("text-align", "left");
							//.css("background-color", "yellow");
							
	this.content = $("<div>").css("margin-left", "15px")
							 .css("margin-top", "10px");
							 //.css("padding", "10px");
							 //.css("background-color", "white");
	
	this.addLine = function(line){
		//this.content.append($("<p>").text(line));
		this.content.append(line).append("<br>");
	};
	
	this.getBox = function(){
		var div = $("<div>", {"id": this.id}).append(this.header)
											 .append(this.content)
											 .addClass("portlet-content")
											 .addClass("ItemBox")
											 .css("margin", "3px")
											 .css("border", "dashed thin #808080")
											 .css("background-color", "#DEF7F1");
		return $("<div>").append(div);
	};
};


var createItemList = function(){
	
	var javascriptItem = createItem("Javascript", "JavascriptItemID");
	
	// javascript
	{
		// BookMark
		{
			var boxLink = createLink("Book Mark", "http://masashi-sasaki.appspot.com/");
			var boxCreator = new contentBoxCreator(boxLink, "BookMarkBoxID");
			boxCreator.addLine("Ext.jsを触ってみたくて作成してみた");
			javascriptItem.html += boxCreator.getBox().html();
		}
		
		// Stl Viewer
		{
			var boxLink = createLink("Stl Viewer", "http://stlviewer-masashi-sasaki.appspot.com/");
			var boxCreator = new contentBoxCreator(boxLink, "StlViewerBoxID");
			boxCreator.addLine("WebGLをラップしたライブラリであるthree.jsを使用。ライブラリの使い方が悪いのか、ポリゴンの数が多いと激重");
			boxCreator.addLine("どうせならWebGLを直接使って書き直したいところ。");
			javascriptItem.html += boxCreator.getBox().html();
		}
		
		// Maze
		{
			var boxLink = createLink("Maze", "http://maze-masashi-sasaki.appspot.com/");
			var boxCreator = new contentBoxCreator(boxLink, "MazeID");
			boxCreator.addLine("もともとPythonで作成した迷路の自動生成・解決の実装をJavascriptの勉強のために書き直したもの。ロジックも多少変更した。");
			boxCreator.addLine("ロジックは基本的には穴掘り法を用いて迷路を自動生成して、それをA*アルゴリズムを用いて自動で解いているだけ");
			boxCreator.addLine("Canvasの勉強になった。");
			javascriptItem.html += boxCreator.getBox().html();
		}
		
		// BlackBoard
		{
			var boxLink = createLink("Black Board", "http://blackboard-masashi-sasaki.appspot.com/");
			var boxCreator = new contentBoxCreator(boxLink, "BlackBoardID");
			boxCreator.addLine("お絵かきツール");
			javascriptItem.html += boxCreator.getBox().html();
		}
	}
	
	var cppItem = createItem("C++", "CppItemID");
	
	// C++
	{
		// CaptureDesktop
		{
			var boxLink = createLink("CaptureDesktop [github]", "https://github.com/SasakiMasashi/repos/tree/master/CaptureDesktop");
			var boxCreator = new contentBoxCreator(boxLink, "CppCaptureDesktopID");
			boxCreator.addLine("画面をキャプチャーするツール。出力するファイルの拡張子はgif, bmp, jpg, pngに対応、");
			boxCreator.addLine("キャプチャーする範囲を変更することが可能、デュアルモニターにも対応。作成環境 Visual Studio 2005");
			cppItem.html += boxCreator.getBox().html();
		}
		
		// GPS
		{
			var boxLink = createLink("GPS(General Problem Solver) [github]", "https://github.com/SasakiMasashi/repos/tree/master/GPS");
			var boxCreator = new contentBoxCreator(boxLink, "CppGPSID");
			boxCreator.addLine("50年以上前に考案された一般問題解決の考え方を実装したもの。論理学に基づく古典的人工知能の考え方。");
			boxCreator.addLine("実現方法は、特定の状態における選択肢を外部ファイル（xmlファイル）として与えておき、例えばAかつBかつCの場合における実行可能な選択肢を探索して、");
			boxCreator.addLine("それらを実行して目標状態に到達するための選択順を探す。xmlファイルを扱うために、xqueryを使用できるxqillaライブラリを使用したが");
			boxCreator.addLine("結局xpathしか使用せず、無駄に重くなった。探索は特に工夫していないのでたいして早くない。");
			boxCreator.addLine("3年以上前に勢いで作成したものだが実装も汚い。開発環境 Visual Studio 2005");
			cppItem.html += boxCreator.getBox().html();
		}
		
		// Eliza
		{
			var boxLink = createLink("Eliza [github]", "https://github.com/SasakiMasashi/repos/tree/master/Eliza");
			var boxCreator = new contentBoxCreator(boxLink, "CppElizaID");
			boxCreator.addLine("古典的な人口無能であるElizaをまねたもの、パターンマッチングで登録されている文面が現れた場合に、キーワードを抽出し");
			boxCreator.addLine("ランダムに選択した回答用文面にキーワードを埋め込んで返す。");
			cppItem.html += boxCreator.getBox().html();
		}
		
		// WebCrawler
		{
			var boxLink = createLink("WebCrawler [github]", "https://github.com/SasakiMasashi/repos/tree/master/WebCrawler");
			var boxCreator = new contentBoxCreator(boxLink, "CppWebCrawlerID");
			boxCreator.addLine("seed.txtファイルに開始URLを探索開始ノードを登録しておくと、そこを開始点としてWebページをロードしてリンクを抽出し探索を続ける");
			boxCreator.addLine("htmlをパースする処理が単純なテキスト解析ベースでしかないため、javascriptで動的に追加されたリンクを探れないなど、欠点が多い。");
			boxCreator.addLine("各Webノード毎にテキストとリンクを抽出して出力用フォルダに結果を出力する。");
			cppItem.html += boxCreator.getBox().html();
		}
		
		// PageRank
		{
			var boxLink = createLink("PageRank [github]", "https://github.com/SasakiMasashi/repos/tree/master/PageRank");
			var boxCreator = new contentBoxCreator(boxLink, "CppPageRankID");
			boxCreator.addLine("上記WebCrawlerで集めたリンク情報からWebグラフを構築して、それをもとに各ノードのPageRankを計算した。");
			boxCreator.addLine("CrawlerのParserの信頼度が低いものの、Webグラフを構築できれば、そのPageRankを計算");
			cppItem.html += boxCreator.getBox().html();
		}
		
		// MPI
		{
			var boxLink = createLink("MPI [github]", "https://github.com/SasakiMasashi/repos/tree/master/MPI");
			var boxCreator = new contentBoxCreator(boxLink, "CppMPIID");
			boxCreator.addLine("MPICH2を用いたテスト実装。");
			boxCreator.addLine("MPICH2Test3はトークンリングを用いて最大値を計算している。複数PC上の複数ノード上で各ノードにランダムに値を割り当てた場合の最大値を算出");
			cppItem.html += boxCreator.getBox().html();
		}
		
		// MillingTimeCalculator
		{
			var boxLink = createLink("MillingTimeCalculator [github]", "https://github.com/SasakiMasashi/repos/tree/master/MillingTimeCalculator");
			var boxCreator = new contentBoxCreator(boxLink, "CppMillingTimeCalculatorID");
			boxCreator.addLine("加工機を制御するNCファイルの切削経路長と加工時間を計算するツール");
			boxCreator.addLine("exeの引数にフォルダを与えると、そのフォルダに含まれる全てのncファイルの加工時間を計算して、htmlの表にして結果を表示する");
			cppItem.html += boxCreator.getBox().html();
		}
	}
	
	var javaItem = createItem("Java", "JavaItemID");
	var cSharpItem = createItem("C#", "CSharpID");
	var rubyItem = createItem("Ruby", "RubyItemID");
	var pythonItem = createItem("Python", "PythonItemID");
	
	// Python
	{
		{
			var boxLink = createLink("Maze [codepad]", "http://codepad.org/SWQEHyDh");
			var boxCreator = new contentBoxCreator(boxLink, "PyMazeID");
			boxCreator.addLine("自動迷路生成・解決");
			pythonItem.html += boxCreator.getBox().html();
		}		
	}
	
	var lispItem = createItem("Lisp", "LispItemID");
	var perlItem = createItem("Perl", "PerlItemID");
	
	var itemlist = [];
	itemlist[0] = javascriptItem;
	itemlist[1] = cppItem;
	itemlist[2] = cSharpItem;
	itemlist[3] = javaItem;
	itemlist[4] = pythonItem;
	itemlist[5] = rubyItem;
	itemlist[6] = lispItem;
	itemlist[7] = perlItem;
	return itemlist;
};

Ext.onReady(function () {
    Ext.tip.QuickTipManager.init();

    Ext.create('Ext.Viewport', {
        layout: 'fit',
        items: [{
            xtype: 'grouptabpanel',
            activeGroup: 0,
            items: [{
                expanded: false,
                items: [{
                    xtype: 'portalpanel',
                    title: '開発',
                    tabTip: 'Dashboard tabtip',
                    border: false,
                    items: [{
                        flex: 1,
                        items: createItemList()
                    }]
                }]
            }, {
                expanded: false,
                items: [{
                    title: 'プロフィール',
                    iconCls: 'x-icon-configuration',
                    tabTip: 'Configuration tabtip',
                    style: 'padding: 10px;',
                    html: 'Under Construction',
					border: false
                }]
            }, {
                expanded: false,
                items: [{
                    title: '更新履歴',
                    iconCls: 'x-icon-configuration',
                    tabTip: 'Configuration tabtip',
                    style: 'padding: 10px;',
                    html: '初版作成',
					border: false
                }]
            }, {
                expanded: false,
                items: {
                    title: '連絡',
                    bodyPadding: 10,
                    html: '下記のメールアドレスに連絡をお願いします。<br />e-mail : qqn93exq9@gmail.com',
                    border: false
                }
            }]
        }]
    });
});


})();
