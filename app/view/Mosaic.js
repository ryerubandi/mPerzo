Ext.define('Perzo.view.Mosaic',{
	extend:'Ext.Container',
	xtype:'mosaic',
	
	config:{
		
		layout:{
			type:'vbox'
		},
		items:[{
              docked: 'top',
              xtype: 'titlebar',
              title:'Mosaic',
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
          	flex:1,
          	xtype:'list',
          	itemCls:'perzo-mosaic-list',
          	itemTpl: '<div class="mosaic-each-item-parent">'+
          			'<img src={img} /><div class="mosaic-each-item-container">'+
          			'<div class="mosaic-each-item-name-row">'+
          			'<div class="mosaic-each-item-username">{userName}</div><div class="mosaic-each-item-time">{timeStamp}</div>'+
          			'</div>'+
          			'<div class="mosaic-each-topic-content-row">'+
          			'<div class="mosaic-each-item-topic-content"><p><b>{topicNo}</b>.{topicContent}</div><div class="mosaic-each-item-badgeText">{badgeText}</div>'+
          			'</p></div>'+	
          			'</div></div>',
		    data: [
		        { img:'./resources/customImages/david.png',userName: 'David Gurle',topicNo:'Topic1',topicContent:'akajsdkahsdhasdjhsdadskjasdasdasdasdasfghfghfghfghfhfghfghf',
		        timeStamp:'16.40',badgeText:'' },
		        { img:'./resources/customImages/vp.png',userName: 'Mike Harmon',topicNo:'Topic1',topicContent:'akajsdkahsdhasdjhsdadskjasdasdasdasdasfhfghfghfghfghfghfghfgh',
		        timeStamp:'16.50',badgeText:'3' }
		    ]
          }]
		
	}
});