Ext.define('Perzo.view.Topics',{
	extend:'Ext.Container',
	xtype:'topics',
	require:['Ext.field.Text','Ext.Toolbar','Ext.TitleBar'],
	config:{
		
		layout:{
			type:'vbox'
		},
		
          
          	items:[{
          		   docked: 'top',
              xtype: 'titlebar',
              title:'David Gurle',
              cls:'topics-navbar',
              
              items: [{
					align: 'right',
					name: 'open-menu-items',
					iconCls: 'list',
					ui: 'plain',
					cls:'perzo-mosaic-right-menu',
					handler:function(btn){
						btn.fireEvent('openMenuItems',btn);
							}
						},
						{
							align: 'left',
							name: 'open-chart-room',
							ui: 'plain',
							text:'Topics',
							cls:'perzo-mosaic-left-menu',
						}
					]
          	},{
          		xtype:'spacer'
          	},{
          		 xtype : 'toolbar',
            	 docked: 'bottom',
            	cls:'topics-chattext-enter-container',
          		layout:'hbox',
          		items:[{
          			xtype:'textfield',
          			name:'',
          			placeHolder:'Type here',
          			cls:'topics-chat-textfield',
          			flex:9
          		},{
          			xtype:'button',
          			iconCls:'action',
          			flex:1
          		}]
          	}]
           

          
        
	}
});