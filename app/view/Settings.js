Ext.define('Perzo.view.Settings',{
	extend:'Ext.Container',
	xtype:'settings',
	 requires: [
        'Ext.TitleBar',
        'Ext.carousel.Carousel',
        'Perzo.view.AccountSettings',
        'Perzo.view.ProfileSettings',
       'Perzo.view.PreferencesSettings'
    ],

	config:{
	
	layout:{
            type:'vbox'
        },
        items: [{
              docked: 'top',
              xtype: 'titlebar',
              title:'Settings',
              cls:'mosaic-navbar',
              
              items: [{
					align: 'right',
					name: 'open-menu-items',
					iconCls: 'list',
					ui: 'plain',
					cls:'perzo-mosaic-right-menu',
					handler:function(btn){
						btn.fireEvent('openMenuItems',btn);
					}
						}
					]

          },{
            xtype:'container',
            cls:'header-container',
            itemId:'headerContainer',
            layout:'hbox',
           
            items:[{
                tag:'div',
                html:'Account',
                cls:'each-container-active',
                flex:1,
                id:'a'
            },{
                tag:'div',
                html:'Profile',
                flex:1,
                cls:'each-container',
                id:'b'
            },{
                tag:'div',
                html:'Preferences',
                cls:'each-container',
                flex:1,
                id:'c'
            }]
        },
         {
            xtype:'carousel',
            id:'setting-carousel-items',
            direction:'horizontal',
            indicator:false,
            activeItem:0,
            flex:1,
            items:[{
                    layout:'fit',
                    xtype:'accountsettings'
            },{
                 layout:'fit',
                 xtype:'profilesetting'
            },{
                 layout:'fit',
                 xtype:'preferencessetting'
            }],
            listeners: {
                    activeitemchange: function(container, newCard, oldCard,e){ 
                      if(container.rendered){ 
                                var docArr = ['a','b','c'];
                                var itemIdArr = ['ext-accountsettings-1','ext-profilesetting-1','ext-preferencessetting-1'];
                                
                                Ext.getCmp(docArr[itemIdArr.indexOf(oldCard._itemId)]).replaceCls('each-container-active','each-container')
                                Ext.getCmp(docArr[itemIdArr.indexOf(newCard._itemId)]).replaceCls('each-container','each-container-active')

                                   
                       } 
                    }
            } 
         }   
            
        ]
    }
});