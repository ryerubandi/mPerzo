Ext.define('Perzo.view.MenuItem',{
	extend:'Ext.Panel',
	xtype:'menuitem',
	config:{
		cls:'menuitem',
		items: [
        {   
            xtype: 'button',
            text: 'Mosaic',
            action:'goToMosaicPage'

        },
        {
            xtype: 'button',
            text: 'Settings',
        },
        {
            xtype: 'button',
            text: 'Get the app',
        },
        {
            xtype: 'button',
            text: 'Log out',
            action:'logout'
        }]
	}
});