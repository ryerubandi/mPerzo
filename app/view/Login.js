Ext.define('Perzo.view.Login',{
	extend:'Ext.form.Panel',
	xtype:'login',

	config:{
		
		cls:'perzo-loginpage',
		
		defaults:{
			xtype:'textfield',
			labelWidth:'0px'
		},
		items:[{
			
            xtype : 'toolbar',
            docked: 'top',
            layout:'hbox',
            items:[{
            	xtype:'image',
            	src:'./resources/customImages/backbutton.png',
            	style:{
	            			'top': '12px',
							'position': 'absolute',
							'height': '21px',
							'width': '51px'
							

            	},
            	execute:'goBackToLandingPage'
            }
            ,{
            	xtype:'image',
            	src:'./resources/customImages/logo.png',
            	style:{
            		    
					   'top': '10px',
						'height': '30px',
						'width': '80%',
						'left': '45px'
            	}
            }
            ]
        
		},
				{
					xtype:'container',
					docked: 'top',
					style:{
							'border-radius' :'0',
							'height':'45px',
							'background-color': 'gray'
					},
					items:[
						{
							xtype:'button',
							cls:'get-perzo',
							text:'Get the Perzo app',
							icon: './resources/customImages/mobilelogo.png',
							iconAlign:'right',
							ui:'plain',
							iconCls:'get-perzo-icon-cls',
							left:0,
							right:0,
							pressedCls:'get-perzo-icon-cls-pressed'
						
						}
					]
				},

				{
					xtype:'label',
					html:'<div style="text-align: center;margin-bottom: 15px;"> Log In</div>'
				},
		        {
                    name : 'email',
                    label: 'Email',
                    placeHolder:'Email',
                },
                {
                   xtype:'passwordfield',
                    name : 'Password',
                    label: 'password',
                    placeHolder:'Choose a Password',
                }
        
                ,{
			xtype:'label',
			html:'<div style="text-align: center;margin-bottom: 75px;"> Forgot email/password ?</div>'
		},{
			xtype:'button',
			ui:'action',
			text:'Log In',
			action:'loggedIn'
		}
            ]
        }
	
});