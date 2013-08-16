Ext.Loader.require('Ext.field.Select');
Ext.define('Perzo.view.PreferencesSettings',{
	extend:'Ext.form.Panel',
	xtype:'preferencessetting',
	config:{
		scrollable:false,
		styleHtmlContent:true,
		items:[{
			padding:15,

		style: {
    			background: '#363636'
			},
		items:[{
			xtype:'label',
			html:'Logout automatically after',
			cls:'profilesetting-label'
		},{
			xtype:'selectfield',
			options: [
                        {text: '10 minutes',  value: 'first'},
                        {text: '30 minutes', value: 'second'},
                        {text: '60 minutes',  value: 'third'}
                    ]

		},{
			xtype:'container',
				style:'margin-top: 15px;',
				width:'100%',
				layout:'hbox',
				pack:'center',
				align:'center',
				items:[{
					xtype:'button',
					ui:'action',
					text:'Save'
				},{
					xtype:'spacer'
				},{
					xtype:'button',
					ui:'decline',
					text:'Cancel'
				}]
		}]
		}]
		
	}
});