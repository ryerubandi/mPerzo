Ext.Loader.require(['Ext.util.DelayedTask','Perzo.view.MenuItem','Ext.MessageBox']);
Ext.define('Perzo.controller.LandingPage',{
	extend:'Ext.app.Controller',
	start:true,
	loggedIn:false,
	init: function() { 
			
	},
	config:{
		
		requires:['Perzo.view.Main','Perzo.view.DisplaySignUp','Perzo.view.Login','Perzo.view.UserSignUp'
		,'Perzo.view.Mosaic',,'Perzo.view.Topics','Perzo.view.SlideNavigation'
		,'Perzo.view.TopicsContainer','Perzo.view.Settings'],
		refs:{
			landingPageView:'main',
			perzoCarouselView:'perzocarousel',
			menuItemView :'menuitem',
			topicView:'topics',
			settingView:'settings'
			
		},
		 routes: {
            '': 'gotoLandingPage',
            'container':'gotoLandingPage',
            'usersignup':'gotoSignupPage',
            'login':'gotoLoginPage',
            'mosaic':'openMosaicPage',
            'topicscontainer':'gotoTopicsContainer',
            'settings':'gotoSettingsPage'
        },
		control:{

			'displaysignup button[action=userAccountCreation]':{
				tap: 'gotoSignupPage'
			},
			'displaysignup button[action=signIn]':{
				tap: 'gotoLoginPage'
			},
			// 'usersignup image[execute=goBackToLandingPage]':{
			// 	tap:'goBackToLandingPage'
			// },
			'usersignup button[execute=goBackToLandingPage]':{
				tap:'goBackToLandingPage'
			},
			// 'login image[execute=goBackToLandingPage]':{
			// 	tap:'goBackToLandingPage'
			// },
			'login button[execute=goBackToLandingPage]':{
				tap:'goBackToLandingPage'
			},
			'login button[action=loggedIn]':{
				tap:'validateUser'
			},
			// 'perzocarousel image':{
			// 	//showPreviousCard:'showPreviousCard',
			// 	//showNextCard:'showNextCard'
			// },
			'perzocarousel':{
				//showPreviousCard:'showPreviousCard',
				startRotating:'startCarousel'
			},
			'mosaic button[name=open-menu-items]':{
				tap:'openMenuItems'	
			},
			'topics button[name=open-menu-items]':{
				tap:'openMenuItems'	
			},
			'settings button[name=open-menu-items]':{
				tap:'openMenuItems'	
			},
			'mosaic list':{
				itemtap:'showMosaicDetails'
			},
			'topics button[name=open-chart-room]':{
				tap:'openSlideNavigation'
			},
			'slidenavigation':{
				itemtap: function (list, index, target, record) {
						this.openSlideNavigation();
					}

			},
			'menuitem button[action=goToMosaicPage]':{
					tap:'goToMosaicPage'
			},
			'menuitem button[action=logout]':{
					tap:'doLogout'
			},
			'menuitem button[action=goToSettingsPage]':{
					tap:'goToSettingsPage'
			},

			'main':{
				
                    activeitemchange: function(container, newCard, oldCard,e){ 
                        this.getApplication().getHistory().add(new Ext.app.Action({
                        url: newCard.config.xtype
                    }), true);
                    }
                
			},
			// '#setting-carousel-items':{
			// 	activeitemchange:function(container,newCard,oldCard,e){
			// 		this.getApplication().getHistory().add(new Ext.app.Action({
			// 			url:'settings/'+newCard.config.xtype
			// 		}),true);
			// 	}
			// }
   
			
		},


	},
	gotoLandingPage:function(){
		this.getLandingPageView().setActiveItem(0);
		this.getApplication().getHistory().add(new Ext.app.Action({
			url:'container'
		}),true);
	},
	stopCarsousel:function(){
		this.start = false;
	},
	startCarousel:function(carousel){

		this.startRotatingCarouselItems();
	},
	
	startRotatingCarouselItems:function(){
		if(this.start == true){
			var view = this.getPerzoCarouselView();
		Ext.create('Ext.util.DelayedTask',function() {
                            if (view.getActiveIndex() == view.items.length - 1) {
                                view.animateActiveItem(0, {duration:350, type:'slide', direction:'left'});
                            }
                            else {
                                view.animateActiveItem((view.getActiveIndex()+1), {duration:350,type:'slide', direction:'left'});
                            }
                             this.startCarousel();
                        },this).delay(4000);
		}
		else return;
		
	},
	gotoLoginPage:function(){
		this.stopCarsousel();
		this.getLandingPageView().setActiveItem(1);
	}

	,
	gotoSignupPage:function(btn){
		this.stopCarsousel();
		this.getLandingPageView().setActiveItem(2);
	},
	goBackToLandingPage:function(){
		
		this.getLandingPageView().animateActiveItem(0,{type :"slide",direction : "right"});
		this.start = true;
		this.startCarousel();
	},
	validateUser:function(btn){
			var email = Ext.util.Format.trim(btn.up('panel[xtype=login]').down('emailfield[name=email]').getValue());
			var password = Ext.util.Format.trim(btn.up('panel[xtype=login]').down('passwordfield[name=password]').getValue());
			if((email =='' || email == null) || (password =='' || password==null))
				{
					//Ext.ComponentQuery.query('label[itemId=login-err-lbl]')[0].element.dom.innerText='Please provide email and password';

					document.getElementById('login-err-lbl').innerHTML= 'Please provide email and password';
					//Ext.Msg.alert('Error!','Please provide input data');
				}
			else
				{
					//Ext.ComponentQuery.query('label[itemId=login-err-lbl]')[0].element.dom.innerText='';
					document.getElementById('login-err-lbl').innerHTML= '';
					this.loggedIn = true;
					this.openMosaicPage();
				}
	},
	openMosaicPage:function(){
		if(this.loggedIn == true){
			this.stopCarsousel();
		this.getLandingPageView().animateActiveItem(3,{type :"slide",direction : "right"});
		}
			else{
				this.gotoLoginPage();
			}
		//this.getLandingPageView().add(Ext.create('Perzo.view.Mosaic'));
		

	},
	showNextCard:function(btn,currentCardNo){
		var totalNoOfCards = this.getPerzoCarouselView().items.length;
		if(currentCardNo == (totalNoOfCards - 1)){
			this.getPerzoCarouselView().animateActiveItem(0,{type:"slide",direction:"right"});
		}
		else{
			this.getPerzoCarouselView().animateActiveItem((currentCardNo + 1),{type:"slide",direction:"right"});
		}

	},
	showPreviousCard:function(btn,currentCardNo){
		var totalNoOfCards = this.getPerzoCarouselView().items.length;
		if(currentCardNo == 0){
			this.getPerzoCarouselView().animateActiveItem((totalNoOfCards - 1),{type:"slide",direction:"left"});
		}
		else{
			this.getPerzoCarouselView().animateActiveItem((currentCardNo - 1),{type:"slide",direction:"left"});
		}

	},
	openMenuItems:function(button){

		if(this.getMenuItemView() && this.getMenuItemView().isHidden() == true ) 
		{
			this.getMenuItemView().show();
		}
		else if (this.getMenuItemView() && this.getMenuItemView().isHidden() == false){
			this.getMenuItemView().hide();
		}
		else{
			var menuItem = Ext.create('Perzo.view.MenuItem');
			menuItem.showBy(button)
		}
	},
	showMosaicDetails:function(dataview,index, target, record, e, eOpts){
		if (this.getMenuItemView()){
			this.getMenuItemView().hide();
			//this.getLandingPageView().add(Ext.create('Perzo.view.TopicsContainer'));
			
		}
		this.getLandingPageView().animateActiveItem(4,{type :"slide",direction : "left"});
		
	},
	openSlideNavigation:function(){
		var me = this;
		var mainEl = me.getTopicView().element;

		if (mainEl.hasCls('out')) {
			mainEl.removeCls('out').addCls('in');
			me.getTopicView().setMasked(false);
		} else {
			mainEl.removeCls('in').addCls('out');
			me.getTopicView().setMasked(true);
		}

	},
	goToMosaicPage:function(){

		if(Ext.getClassName(this.getLandingPageView().getActiveItem()).indexOf('Mosaic') > -1){
					this.getMenuItemView().hide();
		}else{
				this.getMenuItemView().hide();
				this.getLandingPageView().animateActiveItem(3,{type :"slide",direction : "left"});
		}
	},
	doLogout:function(){
		
		Ext.Msg.show({
					   title: 'Logout',
					   message: 'Do you want to logout ?',
					   buttons: Ext.MessageBox.YESNO,
					   scope:this,
					   fn: function(buttonId) {
					       if(buttonId == 'no')
					       {
					       		this.getMenuItemView().hide();
					       		return;
					       }
					       else{
					       	this.getMenuItemView().hide();
					       	this.loggedIn = false;
					       	this.getLandingPageView().animateActiveItem(0,{type :"slide",direction : "left"});
					       	this.start = true;
							this.startCarousel();
					       }
					       	
					   }
					});
	},
	goToSettingsPage:function(){
		this.getMenuItemView().hide();
		this.getLandingPageView().animateActiveItem(5,{type :"slide",direction : "left"});
	}

	


});