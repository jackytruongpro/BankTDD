export class Bank {
  private balance: number;
  private history: string[];
  public isAccountOpened: boolean;
  public accountNumber: string;
  public beneficiaries: string[];

  constructor() {
    this.balance = 0;
    this.history = [];
    this.isAccountOpened = false;
    this.accountNumber = "123456789";
    this.beneficiaries = [];
  }


  // méthode pour obtenir le solde actuel de la banque
  getBalance(): number {
    return this.balance;
  }

  // méthode pour effectuer un dépôt
  deposit(amount: number) {
    this.balance += amount;
    this.history.push(`Dépôt de ${amount}`);
  }

  // méthode pour effectuer un retrait
  withdraw(amount: number) {
    this.balance -= amount;
    this.history.push(`Retrait de  ${amount}`);
  }

  // méthode pour effectuer un virement
  transfer(amount: number, recipient: Bank){
    this.withdraw(amount);
    recipient.deposit(amount);
  }

  // méthode pour effectuer un emprunt
  borrow(amount: number, emitter: Bank){
    emitter.withdraw(amount);
    this.deposit(amount);
  }

  // méthode pour consulter l'historique des actions
  getHistory(): string[] {
    return this.history;
  }

  // méthode pour ouvrir un compte
  openAccount(): boolean {
    return this.isAccountOpened = true;
  }

  // méthode pour fermer un compte
  closeAccount(): boolean {
    return this.isAccountOpened = false;
  }

  // méthode pour modifier le numéro du compte
  updateAccount(newAccountNumber: string) {
    this.accountNumber = newAccountNumber;
  }

  // méthode pour ajouter un bénéficiaire
  addBeneficiary(beneficiaryAccountNumber: string) {
    this.beneficiaries.push(beneficiaryAccountNumber);
  }

  // convertCurrency(amount: number, fromCurrency: string, toCurrency: string): number {
  //   if(fromCurrency == "USD" && toCurrency == "EUR"){
  //     amount * 0.95;
  //   } else if(fromCurrency == "EUR" && toCurrency == "USD") {
  //     amount * 1.05;
  //   } else if (fromCurrency == toCurrency) {
  //     amount = amount;
  //   }
  //   return amount

  // }

}

