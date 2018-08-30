/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
 $(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */



         it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);});


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */



         describe('遍历 allFeeds 对象里面的所有的源',function(){
            let urlIsEmpty=false;
            let nameIsEmpty=false;
            function emptyTest(str){
             if(str == null || str == undefined || str == ''||str.length==0){
                return true;
            }
            const regu =new RegExp( '^[ ]+$');
            if(regu.test(str))
            {
               return true;
           }
       }
       allFeeds.forEach(function(feed){
        let feedUrl = feed.url,
        feedName = feed.name;
        if(emptyTest(feedUrl)){
            urlIsEmpty=true;
        }

        if(emptyTest(feedName)){
            nameIsEmpty=true;
        }
    });
       it('保证有链接字段而且链接不是空的',function(){
        expect(urlIsEmpty).toBe(false);
    });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('保证有名字字段而且不是空的',function(){
           expect(nameIsEmpty).toBe(false);
       });
     });

     });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu',function(){
  /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('ensures the menu element is hidden by default',function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('visibility when the menu icon is clicked and  hide when clicked again',function(){
            let menuicon= $('a.menu-icon-link');
            if($('body').hasClass('menu-hidden')){
                menuicon.click();
                expect($('body').hasClass('menu-hidden')).toBe(false);
            }
            if(!($('body').hasClass('menu-hidden'))){
                menuicon.click();
                expect($('body').hasClass('menu-hidden')).toBe(true);
            }
        });

      });



    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries',function(){
 /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

         beforeEach(function(done){
            loadFeed(0,function(){
                done();
            });
        });
         it('the loadFeed function is called and completes its work',function(done){
            // alert($('.feed').find('.entry').length);
            expect( $('.feed').find('.entry').length>0).toBe(true);
            done()
        });
     });


    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection',function(){
 /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

         let before,now;
         beforeEach(function(done){
            jasmine.DEFAULT_TIMEOUT_INTERVA=500000;
            loadFeed(1,function(){

                before=$('.entry h2').html();
                console.log('1 finished');
                loadFeed(2,function(){
                    now=$('.entry h2').html();
                    console.log('2 finished');
                    done();
                });
            });

        });
         it('when a new feed is loaded by the loadFeed function that the content actually changes',function(done){
            console.log(now.length,before.length);
            expect( before!=now).toBe(true);
            done();
        });

     });

    /*
    测试未定义变量和数组越界

    */
    describe('未定义变量和数组越界',function(){

    })
}());
