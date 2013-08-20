Ext.Loader.require(['Perzo.view.SlideNavigation','Perzo.view.Topics']);
Ext.define('Perzo.view.TopicsContainer',{
	extend:'Ext.Container',
	xtype:'topicscontainer',
	config:{
		layout:'hbox',
		fullscreen: true,
		items:[{
						xtype : 'slidenavigation',
						width : 200,
						style:'background-color:#464343;position:absolute;left:0;',
						
		},{
						xtype : 'topics',
						cls: 'slide',
						width: '100%'
		}]
	}
});