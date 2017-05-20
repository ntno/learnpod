(function(){
  describe('HomeController Test Suite', function(){

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
              ,thirdGif = {
                type : "gif"
                ,url : "fakeSourceURL"
                ,images : {
                  fixed_height : {
                    url : "http://media0.giphy.com/media/4T7e4DmcrP9du/200.gif"
                    ,width : 191
                    ,height : 200
                  }
                }
              }
              ,mockGiphyResponse = {
                data : [
                  firstGif
                  ,secondGif
                  ,thirdGif
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
                expect(mockScope.data.gif.sourceUrl).toBe(firstGif.url);
              });
              it('it should set the fixed_height url on scope', function(){
                expect(mockScope.data.gif.fixed_height.url).toBe(firstGif.images.fixed_height.url);
              });
            });

            describe('When the response is invalid', function(){
              beforeEach(function(){
                $httpBackend.expectGET(mockGiphyResource).respond(400);
                $httpBackend.flush();
              });

              it('it should set hasError on scope to true', function(){
                expect(mockScope.hasError).toBe(true);
              });
              it('it should have url set to "" on scope', function(){
                expect(mockScope.data.gif.sourceUrl).toEqual("");
              });
              it('it should have imgurl set to "" on scope', function(){
                expect(mockScope.data.gif.fixed_height.url).toEqual("");
              });
            });
          });

          describe('When nextGif is called', function(){
            beforeEach(function(){
              $httpBackend.expectGET(mockGiphyResource).respond(mockGiphyResponse);
              $httpBackend.flush();
            });

            describe('for the first time', function(){
              it('it sets url/imgurl to the second gif in the data response', function(){
                mockScope.userFunctions.nextGif();
                expect(mockScope.data.gif.sourceUrl).toBe(secondGif.url);
                expect(mockScope.data.gif.fixed_height.url).toBe(secondGif.images.fixed_height.url);
              });
            });

            describe('for the second time', function(){
              it('it sets url/imgurl to the third gif in the data response', function(){
                mockScope.userFunctions.nextGif();
                mockScope.userFunctions.nextGif();
                expect(mockScope.data.gif.sourceUrl).toBe(thirdGif.url);
                expect(mockScope.data.gif.fixed_height.url).toBe(thirdGif.images.fixed_height.url);
              });
            });

            describe('for the nth time (where n is the number of gifs in the data response)', function(){
              it('it sets url/imgurl to the first gif in the data response', function(){
                mockScope.userFunctions.nextGif();
                mockScope.userFunctions.nextGif();
                mockScope.userFunctions.nextGif();
                expect(mockScope.data.gif.sourceUrl).toBe(firstGif.url);
                expect(mockScope.data.gif.fixed_height.url).toBe(firstGif.images.fixed_height.url);
              });
            });
          });


        });
      });
    });
})();
