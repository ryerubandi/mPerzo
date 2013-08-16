Ext.define('Perzo.view.AccountSettings',{
	extend:'Ext.form.Panel',
	alias:'widget.accountsettings',
	config:{
		styleHtmlContent:true,
		scrollable:false,
		items:[{
			
			padding:15,
			style: {
    			background: '#363636'
			},
			defaults:{
				xtype:'textfield',
				cls:'rectangeTextField',
				labelWidth:0,
				inputCls:'inputClass'

			},
			items:[{
				placeHolder:'First Name',
				name:'fName'
				
				
			},{
				placeHolder:'Last Name',
				name:'lName'
				
			},{
				placeHolder:'Email',
				name:'email'
				
			},{
				placeHolder:'mobile',
				name:'mobile'
				
			},{
				placeHolder:'Old Password',
				name:'oldPassword'
				
			},{
				placeHolder:'New Password',
				name:'newPasswordFirst'
				
			},{
				placeHolder:'New Password Again',
				name:'newPasswordSecond'
				
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