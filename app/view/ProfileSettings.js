Ext.Loader.require(['Ext.field.Radio','Ext.field.DatePicker']);
Ext.define('Perzo.view.ProfileSettings',{
	extend:'Ext.form.Panel',
	xtype:'profilesetting',
	config:{
		scrollable:false,
		styleHtmlContent:true,
		items:[{
			padding:15,

		style: {
    			background: '#363636'
			},
			defaults:{
				labelWidth:'40%'
			},
		items:[
		 {
			xtype:'radiofield',
			name:'gender',
			value:'male',
			label:'Male'
		},{
			xtype:'radiofield',
			name:'gender',
			value:'female',
			label:'Female'
		}
            
		,{
			xtype: 'datepickerfield',
                   // label: 'Birthdate',
                    name: 'birthday',
                    //value: new Date(),
                    placeHolder:'Birthdate',
                    //labelWidth:'45%',
                    style:'margin-top:15px;'
		},
		{xtype:'container',
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
				}]}]

		}]
		
	}
});