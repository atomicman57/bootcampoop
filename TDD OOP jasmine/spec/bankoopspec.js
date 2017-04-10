require("../bankobj.js")
describe("Bank Account ", function(){
	it("should be a type of 'object', and instance of bank account", function(){
		var blessingacc = new bankAccount("Philips Blessing,2000");
			expect(typeof blessingacc).toEqual(typeof {});
			expect(blessingacc instanceof bankAccount).toBeTruthy();
		
	})
	it("The customer name and balance should be a property of the bank Account", function() {
      var ade  = new bankAccount('Adesina', 1000);
      expect(ade.fullName).toBe('Adesina');
      expect(ade.balance).toBe(1000);
    });

    it("The customer should not be able to withdraw amount above their balance", function() {
      var bade  = new bankAccount('Bade', 1000);
      expect(bade.withdraw(1500)).toBe("Insufficient Balance")
      
      
    });

    it("The customer should be able to withdraw", function() {
      var bade  = new bankAccount('Bade', 3000);
      bade.withdraw(1500)
      expect(bade.checkBalance()).toBe(1500);
      
    });

    it("The customer should not be able to withdraw less than 1000 in savings account", function() {
      var shade  = new savingsAccount('shade', 1500);
      expect(shade.withdraw(1000)).toEqual("Insufficient balance -> You can not withdraw less than 1000 in your savings Account")
      expect(shade.checkBalance()).toBe(1500);
      
    });

    it("There should be interest of ( days * (balance/100) ) in current Account after n days", function() {
      var rade  = new currentAccount('Rade', 1000);
      rade.interest(10)
      expect(rade.checkBalance()).toBe(1100);
      });
});

