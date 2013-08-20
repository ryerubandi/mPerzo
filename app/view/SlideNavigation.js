Ext.Loader.require(['Ext.data.Store']);
Ext.define('Perzo.view.SlideNavigation', {
	extend: 'Ext.List',
	xtype: 'slidenavigation',
	
	config: {
		cls : 'nav-list',
		itemTpl: '<div class="topic-item-row"><div class="topic-item-topic-name">{topic}</div>'+
					'<div class="topic-item-unread-count">{unreadCount}</div></div>',
		data: [{
			topic: 'Inbox',
			unreadCount:10
		}, {
			topic: 'Topic 1sdfssd dfsds dfs fsdfsdfsdfsdf',
			unreadCount:''
		}, {
			topic: 'Topic 2',
			unreadCount:1
		},
		{
			topic: 'Topic 3',
			unreadCount:999
		}
		]
	}
});
