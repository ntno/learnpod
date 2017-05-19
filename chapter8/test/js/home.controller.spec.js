(function(){
  describe('HomeController Test Suite', function(){

    /* {"type":"gif","id":"gZLl9szOpgbpS","slug":"puppy-down-slides-gZLl9szOpgbpS","url":"http://giphy.com/gifs/puppy-down-slides-gZLl9szOpgbpS","bitly_gif_url":"http://gph.is/2fAzahj","bitly_url":"http://gph.is/2fAzahj","embed_url":"http://giphy.com/embed/gZLl9szOpgbpS","username":"","source":"http://boredomtherapy.com/puppy-slides-stairs/","rating":"g","content_url":"","source_tld":"boredomtherapy.com","source_post_url":"http://boredomtherapy.com/puppy-slides-stairs/","is_indexable":0,"import_datetime":"2016-11-17 18:55:07","trending_datetime":"2017-03-09 03:00:01","images":{"fixed_height":{"url":"http://media4.giphy.com/media/gZLl9szOpgbpS/200.gif","width":"155","height":"200","size":"771823","mp4":"http://media4.giphy.com/media/gZLl9szOpgbpS/200.mp4","mp4_size":"44690","webp":"http://media4.giphy.com/media/gZLl9szOpgbpS/200.webp","webp_size":"189544"},"fixed_height_still":{"url":"http://media4.giphy.com/media/gZLl9szOpgbpS/200_s.gif","width":"155","height":"200","size":"20861"},"fixed_height_downsampled":{"url":"http://media4.giphy.com/media/gZLl9szOpgbpS/200_d.gif","width":"155","height":"200","size":"124010","webp":"http://media4.giphy.com/media/gZLl9szOpgbpS/200_d.webp","webp_size":"29074"},"fixed_width":{"url":"http://media4.giphy.com/media/gZLl9szOpgbpS/200w.gif","width":"200","height":"258","size":"1184227","mp4":"http://media4.giphy.com/media/gZLl9szOpgbpS/200w.mp4","mp4_size":"65074","webp":"http://media4.giphy.com/media/gZLl9szOpgbpS/200w.webp","webp_size":"278282"},"fixed_width_still":{"url":"http://media4.giphy.com/media/gZLl9szOpgbpS/200w_s.gif","width":"200","height":"258","size":"31348"},"fixed_width_downsampled":{"url":"http://media4.giphy.com/media/gZLl9szOpgbpS/200w_d.gif","width":"200","height":"258","size":"189578","webp":"http://media4.giphy.com/media/gZLl9szOpgbpS/200w_d.webp","webp_size":"42970"},"fixed_height_small":{"url":"http://media4.giphy.com/media/gZLl9szOpgbpS/100.gif","width":"78","height":"100","size":"241595","mp4":"http://media4.giphy.com/media/gZLl9szOpgbpS/100.mp4","mp4_size":"18374","webp":"http://media4.giphy.com/media/gZLl9szOpgbpS/100.webp","webp_size":"69554"},"fixed_height_small_still":{"url":"http://media4.giphy.com/media/gZLl9szOpgbpS/100_s.gif","width":"78","height":"100","size":"7188"},"fixed_width_small":{"url":"http://media4.giphy.com/media/gZLl9szOpgbpS/100w.gif","width":"100","height":"129","size":"376915","mp4":"http://media4.giphy.com/media/gZLl9szOpgbpS/100w.mp4","mp4_size":"26521","webp":"http://media4.giphy.com/media/gZLl9szOpgbpS/100w.webp","webp_size":"104976"},"fixed_width_small_still":{"url":"http://media4.giphy.com/media/gZLl9szOpgbpS/100w_s.gif","width":"100","height":"129","size":"10675"},"downsized":{"url":"http://media4.giphy.com/media/gZLl9szOpgbpS/giphy-tumblr.gif","width":"193","height":"250","size":"1122429"},"downsized_still":{"url":"http://media4.giphy.com/media/gZLl9szOpgbpS/giphy-tumblr_s.gif","width":"193","height":"250","size":"29761"},"downsized_large":{"url":"http://media4.giphy.com/media/gZLl9szOpgbpS/giphy.gif","width":"296","height":"382","size":"2231081"},"downsized_medium":{"url":"http://media4.giphy.com/media/gZLl9szOpgbpS/giphy.gif","width":"296","height":"382","size":"2231081"},"original":{"url":"http://media4.giphy.com/media/gZLl9szOpgbpS/giphy.gif","width":"296","height":"382","size":"2231081","frames":"39","mp4":"http://media2.giphy.com/media/gZLl9szOpgbpS/giphy.mp4","mp4_size":"300665","webp":"http://media4.giphy.com/media/gZLl9szOpgbpS/giphy.webp","webp_size":"498526","hash":"383e3a71733b820d55fee73952604fc0"},"original_still":{"url":"http://media4.giphy.com/media/gZLl9szOpgbpS/giphy_s.gif","width":"296","height":"382","size":"58097"},"looping":{"mp4":"http://media4.giphy.com/media/gZLl9szOpgbpS/giphy-loop.mp4","mp4_size":"1130513"},"original_mp4":{"mp4":"http://media4.giphy.com/media/gZLl9szOpgbpS/giphy.mp4","mp4_size":"300665","width":"480","height":"618"},"preview":{"mp4":"http://media4.giphy.com/media/gZLl9szOpgbpS/giphy-preview.mp4","mp4_size":"35459","width":"212","height":"276"},"downsized_small":{"mp4":"http://media4.giphy.com/media/gZLl9szOpgbpS/giphy-downsized-small.mp4","mp4_size":"148956","width":"296","height":"382"},"preview_gif":{"url":"http://media4.giphy.com/media/gZLl9szOpgbpS/giphy-preview.gif","width":"76","height":"98","size":"47532"},"preview_webp":{"url":"http://media4.giphy.com/media/gZLl9szOpgbpS/giphy-preview.webp","width":"170","height":"220","size":"49860"}}}  */

    describe('When home.controller module is created', function () {
      var
      moduleName = 'home.controller'
      ,componentName = "HomeController"
      ,mockHomeModule = null
      ,mockHomeControllerScope
      ,mockHomeController
      ,mockScope;

      beforeEach(module(moduleName));

      it('it should exist', function(){
        expect(angular.module(moduleName)).toEqual(jasmine.any(Object));
      });

      it('it should have 2 dependencies', function(){
        var dependencies = angular.module(moduleName).requires
        ,expectedDependencies = ['dataResource.factory', 'gifInfo.factory'];
        expect(expectedDependencies.length).toEqual(2);
        expect(dependencies).toEqual(expectedDependencies);
      });

      describe('When HomeController is instantiated', function(){
          var mockGiphyResource = 'http://api.giphy.com/v1/gifs/search?q=cute+puppy&api_key=dc6zaTOxFJmzC'
              ,firstGif = {
                            type : "gif"
                            ,url : "http://giphy.com/gifs/puppy-down-slides-gZLl9szOpgbpS"
                            ,images : {
                              fixed_height : {
                                url : "http://media4.giphy.com/media/gZLl9szOpgbpS/200.gif"
                                ,width : 155
                                ,height : 200
                              }
                            }
                          }
              ,secondGif = {
                            type : "gif"
                            ,url : "http://giphy.com/gifs/stop-slow-mo-14ivBLRRRmyQw0"
                            ,images : {
                              fixed_height : {
                                url : "http://media2.giphy.com/media/14ivBLRRRmyQw0/200.gif"
                                ,width : 200
                                ,height : 200
                              }
                            }
                          }
              ,mockGiphyResponse = {
                data : [
                  firstGif
                  ,secondGif
                ]
              };

          beforeEach(inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
            $httpBackend = $injector.get('$httpBackend');
            $controller = $injector.get('$controller');

            mockHomeControllerScope = $rootScope.$new();
            mockHomeController = $controller(componentName, {
                '$scope': mockHomeControllerScope
            });
            mockScope = mockHomeControllerScope.homeScope;
          }));

          afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
          });

          it('it should exist', function () {
            $httpBackend.expectGET(mockGiphyResource).respond(mockGiphyResponse);
            $httpBackend.flush();
            expect(angular.isObject(mockHomeController)).toEqual(true);
          });

          describe('When HomeController sends a GET request to Giphy Resource', function(){
            describe('When the response is valid', function(){
              beforeEach(function(){
                $httpBackend.expectGET(mockGiphyResource).respond(mockGiphyResponse);
                $httpBackend.flush();
              });

              it('it should set hasError on scope to false', function(){
                expect(mockScope.hasError).toBe(false);
              });
              it('it should set url on scope', function(){
                expect(mockScope.data.gif.url).toBe("http://giphy.com/gifs/puppy-down-slides-gZLl9szOpgbpS");
              });
              it('it should set imgurl on scope', function(){
                expect(mockScope.data.gif.imgUrl).toBe("http://media4.giphy.com/media/gZLl9szOpgbpS/200.gif");
              });
            });

            describe('When the response is valid', function(){
              beforeEach(function(){
                $httpBackend.expectGET(mockGiphyResource).respond(400);
                $httpBackend.flush();
              });

              it('it should set hasError on scope to true', function(){
                expect(mockScope.hasError).toBe(true);
              });
              it('it should have url set to "" on scope', function(){
                expect(mockScope.data.gif.url).toEqual("");
              });
              it('it should have imgurl set to "" on scope', function(){
                expect(mockScope.data.gif.imgUrl).toEqual("");
              });
            });
          });
        });
      });
    });
})();
