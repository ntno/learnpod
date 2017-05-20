(function() {
  describe('GifInfoFactory Test Suite', function() {

    describe('When GifInfoFactory is instantiated', function() {
      var mockGifInfoFactory
      ,mockGiphyData = {
           "type":"gif",
           "id":"gZLl9szOpgbpS",
           "slug":"puppy-down-slides-gZLl9szOpgbpS",
           "url":"http://giphy.com/gifs/puppy-down-slides-gZLl9szOpgbpS",
           "bitly_gif_url":"http://gph.is/2fAzahj",
           "bitly_url":"http://gph.is/2fAzahj",
           "embed_url":"http://giphy.com/embed/gZLl9szOpgbpS",
           "username":"",
           "source":"http://boredomtherapy.com/puppy-slides-stairs/",
           "rating":"g",
           "content_url":"",
           "source_tld":"boredomtherapy.com",
           "source_post_url":"http://boredomtherapy.com/puppy-slides-stairs/",
           "is_indexable":0,
           "import_datetime":"2016-11-17 18:55:07",
           "trending_datetime":"2017-03-09 03:00:01",
           "images":{
              "fixed_height":{
                 "url":"http://media4.giphy.com/media/gZLl9szOpgbpS/200.gif",
                 "width":"155",
                 "height":"200",
                 "size":"771823",
                 "mp4":"http://media4.giphy.com/media/gZLl9szOpgbpS/200.mp4",
                 "mp4_size":"44690",
                 "webp":"http://media4.giphy.com/media/gZLl9szOpgbpS/200.webp",
                 "webp_size":"189544"
              },
              "fixed_height_still":{
                 "url":"http://media4.giphy.com/media/gZLl9szOpgbpS/200_s.gif",
                 "width":"155",
                 "height":"200",
                 "size":"20861"
              },
              "fixed_height_downsampled":{
                 "url":"http://media4.giphy.com/media/gZLl9szOpgbpS/200_d.gif",
                 "width":"155",
                 "height":"200",
                 "size":"124010",
                 "webp":"http://media4.giphy.com/media/gZLl9szOpgbpS/200_d.webp",
                 "webp_size":"29074"
              },
              "fixed_width":{
                 "url":"http://media4.giphy.com/media/gZLl9szOpgbpS/200w.gif",
                 "width":"200",
                 "height":"258",
                 "size":"1184227",
                 "mp4":"http://media4.giphy.com/media/gZLl9szOpgbpS/200w.mp4",
                 "mp4_size":"65074",
                 "webp":"http://media4.giphy.com/media/gZLl9szOpgbpS/200w.webp",
                 "webp_size":"278282"
              },
              "fixed_width_still":{
                 "url":"http://media4.giphy.com/media/gZLl9szOpgbpS/200w_s.gif",
                 "width":"200",
                 "height":"258",
                 "size":"31348"
              },
              "fixed_width_downsampled":{
                 "url":"http://media4.giphy.com/media/gZLl9szOpgbpS/200w_d.gif",
                 "width":"200",
                 "height":"258",
                 "size":"189578",
                 "webp":"http://media4.giphy.com/media/gZLl9szOpgbpS/200w_d.webp",
                 "webp_size":"42970"
              },
              "fixed_height_small":{
                 "url":"http://media4.giphy.com/media/gZLl9szOpgbpS/100.gif",
                 "width":"78",
                 "height":"100",
                 "size":"241595",
                 "mp4":"http://media4.giphy.com/media/gZLl9szOpgbpS/100.mp4",
                 "mp4_size":"18374",
                 "webp":"http://media4.giphy.com/media/gZLl9szOpgbpS/100.webp",
                 "webp_size":"69554"
              },
              "fixed_height_small_still":{
                 "url":"http://media4.giphy.com/media/gZLl9szOpgbpS/100_s.gif",
                 "width":"78",
                 "height":"100",
                 "size":"7188"
              },
              "fixed_width_small":{
                 "url":"http://media4.giphy.com/media/gZLl9szOpgbpS/100w.gif",
                 "width":"100",
                 "height":"129",
                 "size":"376915",
                 "mp4":"http://media4.giphy.com/media/gZLl9szOpgbpS/100w.mp4",
                 "mp4_size":"26521",
                 "webp":"http://media4.giphy.com/media/gZLl9szOpgbpS/100w.webp",
                 "webp_size":"104976"
              },
              "fixed_width_small_still":{
                 "url":"http://media4.giphy.com/media/gZLl9szOpgbpS/100w_s.gif",
                 "width":"100",
                 "height":"129",
                 "size":"10675"
              },
              "downsized":{
                 "url":"http://media4.giphy.com/media/gZLl9szOpgbpS/giphy-tumblr.gif",
                 "width":"193",
                 "height":"250",
                 "size":"1122429"
              },
              "downsized_still":{
                 "url":"http://media4.giphy.com/media/gZLl9szOpgbpS/giphy-tumblr_s.gif",
                 "width":"193",
                 "height":"250",
                 "size":"29761"
              },
              "downsized_large":{
                 "url":"http://media4.giphy.com/media/gZLl9szOpgbpS/giphy.gif",
                 "width":"296",
                 "height":"382",
                 "size":"2231081"
              },
              "downsized_medium":{
                 "url":"http://media4.giphy.com/media/gZLl9szOpgbpS/giphy.gif",
                 "width":"296",
                 "height":"382",
                 "size":"2231081"
              },
              "original":{
                 "url":"http://media4.giphy.com/media/gZLl9szOpgbpS/giphy.gif",
                 "width":"296",
                 "height":"382",
                 "size":"2231081",
                 "frames":"39",
                 "mp4":"http://media2.giphy.com/media/gZLl9szOpgbpS/giphy.mp4",
                 "mp4_size":"300665",
                 "webp":"http://media4.giphy.com/media/gZLl9szOpgbpS/giphy.webp",
                 "webp_size":"498526",
                 "hash":"383e3a71733b820d55fee73952604fc0"
              },
              "original_still":{
                 "url":"http://media4.giphy.com/media/gZLl9szOpgbpS/giphy_s.gif",
                 "width":"296",
                 "height":"382",
                 "size":"58097"
              },
              "looping":{
                 "mp4":"http://media4.giphy.com/media/gZLl9szOpgbpS/giphy-loop.mp4",
                 "mp4_size":"1130513"
              },
              "original_mp4":{
                 "mp4":"http://media4.giphy.com/media/gZLl9szOpgbpS/giphy.mp4",
                 "mp4_size":"300665",
                 "width":"480",
                 "height":"618"
              },
              "preview":{
                 "mp4":"http://media4.giphy.com/media/gZLl9szOpgbpS/giphy-preview.mp4",
                 "mp4_size":"35459",
                 "width":"212",
                 "height":"276"
              },
              "downsized_small":{
                 "mp4":"http://media4.giphy.com/media/gZLl9szOpgbpS/giphy-downsized-small.mp4",
                 "mp4_size":"148956",
                 "width":"296",
                 "height":"382"
              },
              "preview_gif":{
                 "url":"http://media4.giphy.com/media/gZLl9szOpgbpS/giphy-preview.gif",
                 "width":"76",
                 "height":"98",
                 "size":"47532"
              },
              "preview_webp":{
                 "url":"http://media4.giphy.com/media/gZLl9szOpgbpS/giphy-preview.webp",
                 "width":"170",
                 "height":"220",
                 "size":"49860"
              }
           }
        };



      beforeEach(module('gifInfo.factory'));

      beforeEach(inject(function($injector) {
        mockGifInfoFactory = $injector.get('GifInfoFactory');
      }));

      describe('When createGifInfo is called', function() {
        it('it should exist', function() {
          expect(mockGifInfoFactory.createGifInfo).toEqual(jasmine.any(Function));
        });

        it('it should return {} when input is {}', function() {
          var input = {},
          result = mockGifInfoFactory.createGifInfo(input);
          expect(result).toEqual({});
        });

        it('it should set "sourceUrl" to giphy\'s url field', function(){
          var result = mockGifInfoFactory.createGifInfo(mockGiphyData);
          expect(result.sourceUrl).toEqual('http://giphy.com/gifs/puppy-down-slides-gZLl9szOpgbpS');
        });

        it('it should set "fixed_height" to giphy\'s images.fixed_height', function(){
          var expected = {
            sourceUrl : 'http://giphy.com/gifs/puppy-down-slides-gZLl9szOpgbpS'
            ,fixed_height : {
              url : 'http://media4.giphy.com/media/gZLl9szOpgbpS/200.gif'
              ,width : '155'
              ,height : '200'
            }
          }
          ,result;
          result = mockGifInfoFactory.createGifInfo(mockGiphyData);
          expect(result).toEqual(expected);
        });

      });

    });
  });
})();
