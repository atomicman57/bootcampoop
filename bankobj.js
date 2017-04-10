/**
This is a bank account OOP, it contains types of bank account like savings and current account.
It have methods like Withdraw, Deposit, Check Balance
Note: Savings account balance cannot be less than 1000
	  Current account yield interest everyday

**/

function bankAccount(fullName,balance){
	this.fullName = fullName;
	this.balance = balance;
	this.checkBalance = function(){
		return this.balance;
	}

	this.deposit = function(amount){
	if(amount > 0){
		this.balance += amount;
	}
	}
	
	this.withdraw = function(amount){
		if(amount > this.balance){
		return "Insufficient Balance";
	}
	else{
		this.balance -= amount;
	}
}
}

// Inheritance: savings and current Account inherited from bankAccount

/**
In Savings Account, your balance can not be less than 1000 naira
**/
function savingsAccount(fullName,balance){
	bankAccount.call(this,fullName,balance);
	this.accountType = "Savings Account";
	savingsAccount.prototype = Object.create(bankAccount.prototype);
	savingsAccount.prototype.constructor = savingsAccount;
	
	this.withdraw = function(amount){
		if(amount > this.balance){
		return "Insufficient savings Balance";
	}
	else if(this.balance - amount < 1000){
		return "Insufficient balance -> You can not withdraw less than 1000 in your savings Account"
	}
	else{
		this.balance -= amount;
	}

	}
}


function currentAccount(fullName,balance){
bankAccount.call(this,fullName,balance);	 
	this.accountType = "Current Account";
	currentAccount.prototype = Object.create(bankAccount.prototype);
	currentAccount.prototype.constructor = currentAccount;
	
		
		// interest of current Account, each day interest is added to the balan
		this.interest = function(days){
			this.days = 0;
		this.days += days
			interestYield = days * (balance/100)
			this.balance += interestYield
			return "The interest Yield in your current account is "+ interestYield
		}
	}

