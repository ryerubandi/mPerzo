Ext.Loader.require(['Ext.field.Password','Ext.field.Email','Ext.Toolbar']);
Ext.define('Perzo.view.Login',{
	extend:'Ext.form.Panel',
	xtype:'login',

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
            		    
					 //   'top': '10px',
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
					html:'<div style="text-align: center;margin-bottom: 15px;"> Log In</div>'
				},
				{
					xtype:'label',
					itemId:'login-err-lbl',
					html:'<div id="login-err-lbl" class="display-error"> </div>'
				},
		        {
                    xtype: 'emailfield',
                    name : 'email',
                    label: 'Email',
                    placeHolder:'Email',
                    style:'font-size: 15px;'
                },
                {
                    xtype:'passwordfield',
                    name : 'password',
                    label: 'password',
                    placeHolder:'Choose a Password',
                    style:'font-size: 15px;'
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