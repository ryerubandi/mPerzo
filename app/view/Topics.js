Ext.Loader.require(['Ext.TitleBar']);
Ext.define('Perzo.view.Topics',{
	extend:'Ext.Container',
	xtype:'topics',
	config:{
		styleHtmlContent:true,
		layout:{
			type:'fit'
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
          		xtype:'container',
          		layout:'vbox',
          		align:'stretch',
          		scrollable:true,
          		items:[{
          				xtype:'container',
						flex:1,
          				layout:'hbox',
          				cls:'topics-profile',
          				style:'background: #363636;',
          				items:[{
          						flex:3,
          						tpl:'<div class="topics-profile-container">'+
          									'<div><img src="" /></div>'+
          									'<div class="topics-profile-lastActivity">Last active 6.20PM</div>'+
          									'<div class="topics-profile-metadata">'+
          									'<div class="topic-profile-status">I Love Perzo !</div>'+
          									'<div class="topic-profile-weather-status"></div>'+
          									'<div class="topic-profile-location">Palo Alto, CA</div>'+
          									'<div class="topic-profile-temperature">11.54 PM, 39<sup>0</sup>C</div>'+
          									'</div>'+
	          						'</div>',
          						data:{name:'kali'}
          					},
          					  { 
          					  	flex:2,
          					  	
          					  	tpl:'<div class="topic-profile-single-div"></div><div class="topic-profile-single-div"></div>',
          						data:{noOfDivs:2}
          					}
          					]
          				},
          				{
          					xtype:'container',
          					flex:1
          					
          				}
          		]
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