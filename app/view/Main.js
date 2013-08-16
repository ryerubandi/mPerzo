Ext.define('Perzo.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: ['Perzo.view.Carousel','Perzo.view.DisplaySignUp','Perzo.view.Login','Perzo.view.UserSignUp'
    ,'Perzo.view.Mosaic','Perzo.view.TopicsContainer','Perzo.view.Settings'],
    config: {

        layout:{
            type:'card',
            animation:{type :"slide",direction : "left"}
            },
        items: [
                {   xtype:'container',
                    layout:'vbox',
                    items:[{
                        xtype:'perzocarousel'
                    },
                    {
                        xtype:'displaysignup'
                    }
                    ]
                },{
                    xtype:'login'
                },{
                    xtype:'usersignup'
                },{
                    xtype:'mosaic'
                },{
                    xtype:'topicscontainer'
                },{
                    xtype:'settings'
                }                  

                ]
}
});
