Ext.define('Perzo.view.DisplaySignUp',{
	extend:'Ext.Container',
	xtype:'displaysignup',
	requires:['Ext.Button','Ext.Label','Ext.Spacer'],
	config:{
		// cls:'perzo-display-signup',
		flex:1,
		styleHtmlContent:true,
		layout:{
			type:'vbox'
		},
		defaults:{

			styleHtmlContent:true
		},
		items:[
		{
			xtype:'container',
			cls:'perzo-display-signup',
		layout:'vbox',
		items:[
		{
			xtype:'button',
			cls:'perzo-appstore',
			height:'40px',
			// style:'background-color: #76797c;'
			icon:'./resources/customImages/appstore.png',
			iconAlign:'center '
		},{
			xtype:'label',
			cls:'perzo-signup-getperzo',
			html:'Get the Perzo app to experience the full features'
		},{
			xtype:'button',
			
			ui:'action',
			text:'Sign up',
			height:'40px',
			style:'background-color: #185e93;font-size: 13px;font-weight: normal !important;',
			action:'userAccountCreation'
		},{
			xtype:'button',
			cls:'perzo-signup-haveanaccount',
			html:'Already have an account ?',
			action:'signIn'

		}]

	},{
			xtype:'container',
			layout:'hbox',
			cls:'perzo-signup-footer',
			items:[{
				xtype:'label',
				// styleHtmlContent:true,
				html:'About us |'
			},{
				xtype:'label',
				html:' &nbspLegal |'
			},{
				xtype:'label',
				html:' &nbspBlog'
			},{ 
				xtype:'spacer'

			},{
					xtype:'label',
				html:'© 2013 - Perzo Inc.'
			}]
		}]
	}
});