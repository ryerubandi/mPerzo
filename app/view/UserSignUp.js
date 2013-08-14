Ext.Loader.require('Ext.field.Text');
Ext.define('Perzo.view.UserSignUp',{
	extend:'Ext.form.Panel',
	xtype:'usersignup',
	config:{
		scrollable:false,
		styleHtmlContent:true,
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
       //      	xtype:'image',
       //      	src:'./resources/customImages/backbutton.png',
       //      	style:{
	      //       			'top': '12px',
							// 'position': 'absolute',
							// 'height': '21px',
							// 'width': '51px'
							

       //      	},
       			iconCls:'arrow_left',
       			ui:'back',
            	execute:'goBackToLandingPage'
            	
            }
            ,{
            	xtype:'image',
            	src:'./resources/customImages/logo.png',
      //       	style:{
            		    
					 //    'top': '10px',
						// 'height': '30px',
						// 'width': '80%',
						// 'left': '45px'
						
      //       	}
      	style:{
            		    
					    'top': '10px',
						 'height': '30px',
						 'width': '70%'
						 
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
					html:'<div style="text-align: center;margin-bottom: 10px;"> Sign up with</div>'
				},
				{
					xtype:'container',
					layout:'hbox',
					items:[{
						xtype:'button',
						cls:'facebook',
						text:'Facebook',
						icon:'./resources/customImages/facebook.png'
					

					},{
						xtype:'button',
						text:'Google',
						cls:'google',
						icon:'./resources/customImages/google.png',
					}]
				},
				{
					xtype:'container',
					cls:'orCls',
					html:'<div><span></span><span>or</span><span></span></div>'
				},
		        {
                    name : 'email',
                    label: 'Email',
                   	placeHolder:'Email',
                   	style:'font-size: 15px;'
                },
                {
                   xtype:'passwordfield',
                    name : 'Password',
                    label: 'password',
                    placeHolder:'Choose a Password',
                    style:'font-size: 15px;'
                }
        
                ,{
			xtype:'label',
			html:'<div style="text-align: center;font-size: 10px;margin-bottom: 75px;"> By signing up, you agree to our Terms and Conditions & Privacy Policy </div>'
		},{
			xtype:'button',
			ui:'action',
			text:'Sign up'
			//cls:'perzo-signup-signup-btn'
		}
            ]
	}
});