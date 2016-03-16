namespace FortuneCookie {

    angular.module('FortuneCookie', []);

  
    class FortuneController {

        public _fortune = '';

        constructor(private fortune: Fortune) {

        }
        randomFortune() {
            this._fortune = this.fortune.fortuneTeller();
        }
        get fortunes() {
            return this._fortune;
        }
    }


    class Fortune {
        

        fortuneTeller(){            

            let yourFortune = Math.random();

            if (yourFortune <= 0.33) {
                return 'Today may be your lucky day';
            } else if (yourFortune <= 0.66) {
                return 'You will come across great fortunes soon';
            } else {
                return 'Prosperity is in your immediate future';
            }
            
        }

    }

  

    angular.module('FortuneCookie').service('fortune', Fortune);
    angular.module('FortuneCookie').controller('fortuneController', FortuneController);
};


//instructor example
//namespace FortuneCookie {

//    angular.module('FortuneCookie', []);

//    class FortuneCookieController {

//        public fortune;

//        constructor(private fortuneCookieService: FortuneCookieService) {
//            this.fortune = fortuneCookieService.getRandomFortune();
//        }

//    }

//    angular.module('FortuneCookie').controller('FortuneCookieController', FortuneCookieController);


//    class FortuneCookieService {

//        fortunes = [
//            'You will be rich tomorrow',
//            'You will win something big soon',
//            'You will meet someone influential in the near future'
//        ];

//        getRandomFortune() {
//            return this.fortunes[Math.floor(Math.random() * this.fortunes.length)];
//        }

//    }
//    angular.module('FortuneCookie').service('fortuneCookieService', FortuneCookieService);
//}



