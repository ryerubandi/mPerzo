
Ext.Loader.require('Ext.Img');
Ext.define('Perzo.view.Carousel',{
	extend:'Ext.carousel.Carousel',
	xtype:'perzocarousel',
	config:{
		flex:1,
		indicator:false,
	    direction: 'horizontal',
        listeners:
                {
                    'initialize': function(carousel) {
                       this.fireEvent('startRotating',carousel);
                     }
                },       
		layout:{
			type:'card',
			//animation:{type :"slide",direction : "right"}
		},
		defaults:{
			xtype:'container',
			layout:'fit',
			styleHtmlContent:true
		},
		items:[{
			layout:'vbox',
			items:[{
				tpl:'<div class="perzo-landing-carousel-base">'+ 
				'<img src={imageSrc} class="bgImage">'+
				'<img src="./resources/customImages/logo.png" class="perzo-landing-carousel-perzo-logo" />'+
				'<div class="perzo-landing-carousel-transparent"></div>'+
				'<div class="perzo-landing-carousel-content" >'+
				'<h1>{headerContent}</h1>'+
				'<div>{subText}</div>'+
				'</div></div>',
				data:{
					imageSrc:'./resources/customImages/bg_landing1.png',
					headerContent:'Get personal.',
					subText:'End-to-end encryption to ensure confidential communication'+
					' with yourpersonal network of family, friends and colleagues'
				}
			}
			,{
				xtype:'image',
				src:'./resources/customImages/leftarrow.png',
				cls:'leftArrow',
				currentCard:0,
				listeners:{
					tap:function(btn){
						btn.fireEvent('showPreviousCard',btn,btn.currentCard);
					}
				}
			},{
				xtype:'image',
				src:'./resources/customImages/rightarrow.png',
				cls:'rightArrow',
				currentCard:0,
				listeners:{
					tap:function(btn){
						btn.fireEvent('showNextCard',btn,btn.currentCard);
					}
				}
			}]}
			
			,
				{
					layout:'vbox',
					items:[
						{
							tpl:'<div class="perzo-landing-carousel-base">'+ 
							'<img src={imageSrc} class="bgImage">'+
							'<img src="./resources/customImages/logo.png" class="perzo-landing-carousel-perzo-logo" />'+
							'<div class="perzo-landing-carousel-transparent"></div>'+
							'<div class="perzo-landing-carousel-content" ><h1>{headerContent}</h1>'+
							'<div>{subText}</div>'+
							'</div></div>',
							data:{
								imageSrc:'./resources/customImages/bg_landing2.png',
								headerContent:'Simplify your life.',
								subText:'Link your cloud storage and social media accounts'+
								' to one web application'
							}},
					{
						xtype:'image',
						src:'./resources/customImages/leftarrow.png',
						cls:'leftArrow',
						currentCard:1,
						listeners:{
					tap:function(btn){
						btn.fireEvent('showPreviousCard',btn,btn.currentCard);
					}
				}
					},
					{
						xtype:'image',
						src:'./resources/customImages/rightarrow.png',
						cls:'rightArrow',
						currentCard:1,
						listeners:{
					tap:function(btn){
						btn.fireEvent('showNextCard',btn,btn.currentCard);
					}
				}
					}
					]
				}

					,
				{
					layout:'vbox',
					items:[
						{
							tpl:'<div class="perzo-landing-carousel-base">'+ 
							'<img src={imageSrc} class="bgImage">'+
							'<img src="./resources/customImages/logo.png" class="perzo-landing-carousel-perzo-logo" />'+
							'<div class="perzo-landing-carousel-transparent"></div>'+
							'<div class="perzo-landing-carousel-content" ><h1>{headerContent}</h1>'+
							'<div>{subText}</div>'+
							'</div></div>',
							data:{
								imageSrc:'./resources/customImages/bg_landing3.png',
								headerContent:'Everything in one place.',
								subText:'By integrating email, chat and SMS into one interface, you '+
								'never need to juggle apps again.'
							}
						},
						{
						xtype:'image',
						src:'./resources/customImages/leftarrow.png',
						cls:'leftArrow',
						currentCard:2,
						listeners:{
					tap:function(btn){
						btn.fireEvent('showPreviousCard',btn,btn.currentCard);
					}
				}
						},
						{
							xtype:'image',
						src:'./resources/customImages/rightarrow.png',
						cls:'rightArrow',
						currentCard:2,
						listeners:{
					tap:function(btn){
						btn.fireEvent('showNextCard',btn,btn.currentCard);
					}
				}
						}
					]
				}

					]


				}
			});