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
            docArr : ['a','b','c'], current : 0,prev : 0, max : 2,
            id:'setting-carousel-items',
            direction:'horizontal',
            indicator:false,
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
                    initialize: function(c) {
                        this.element.on({
                            swipe: function(e, node, options) {
                               
                                var docArr = ['a','b','c'], max = 2;
                                var current = Ext.getCmp('setting-carousel-items') .getActiveIndex();
                               
                                 if(e.direction == "left") {
                                     if(current == max)
                                         return false;
                                     else{
                                        Ext.getCmp(docArr[current]).replaceCls('each-container-active','each-container')
                                        Ext.getCmp(docArr[current+1]).replaceCls('each-container','each-container-active')

                                     }
                                  }
                                   else 
                                    {
                                        if(current == 0)
                                            return false;
                                        else{
                                            Ext.getCmp(docArr[current]).replaceCls('each-container-active','each-container')
                                            Ext.getCmp(docArr[current-1]).replaceCls('each-container','each-container-active')
                                        }
                                         
                                 }}
                        });
                    }
            } 
         }   
            
        ]
    }
});