import { Bank } from './bank';

describe('Bank', () => {
  let bank: Bank;

  beforeEach(() => {
    bank = new Bank();
  });

  it('Mettre à jour le solde du compte lors du dépôt', () => {
    bank.deposit(100);

    expect(bank.getBalance()).toEqual(100);
  });

  it('Mettre à jour le solde du compte lors du retrait', () => {
    bank.deposit(100);
    bank.withdraw(50);

    expect(bank.getBalance()).toEqual(50);
  });

  it('Mettre à jour le solde des 2 comptes lors d\'un virement' , () => {
    let recipientBank: Bank = new Bank();
    bank.deposit(100);
    bank.transfer(30, recipientBank);

    expect(recipientBank.getBalance()).toEqual(30);
    expect(bank.getBalance()).toEqual(70);
  });

  it('Mettre à jour le solde des 2 comptes lors d\'un emprunt' , () => {
    let emitterBank: Bank = new Bank();
    bank.deposit(100);
    emitterBank.borrow(40, bank);

    expect(emitterBank.getBalance()).toEqual(40);
    expect(bank.getBalance()).toEqual(60);
  });

  it('Afficher toutes les opérations effectuées', () => {
    let recipientBank: Bank = new Bank();
    bank.deposit(100);
    bank.withdraw(50);

    expect(bank.getHistory()).toEqual(['Dépôt de 100', 'Retrait de  50']);
  });

  it("Définir la propriété isAccountOpened en true pour ouverture d'un compte", () => {
    let newBank = new Bank();
    newBank.openAccount();

    expect(newBank.isAccountOpened).toEqual(true);
  });

  it("Définir la propriété isAccountOpened en false pour fermeture d'un compte", () => {
    let newBank = new Bank();
    newBank.openAccount();
    expect(newBank.isAccountOpened).toEqual(true);

    newBank.closeAccount();
    expect(newBank.isAccountOpened).toEqual(false);
  });

  it("Mettre à jour le numéro de compte", () => {
    let account = new Bank;
    account.updateAccount("654321");

    expect(account.accountNumber).toEqual("654321");
  });

  it("Ajout d'un bénéficiaire à un compte", () => {
    let account = new Bank;
    account.addBeneficiary("Bénéficiaire 1");

    expect(account.beneficiaries).toContain("Bénéficiaire 1");
  });

  it("Convertir une somme d'une devise à une autre ", () => {
    let newBank = new Bank();

    expect(newBank.convertCurrency(100, "EUR", "USD")).toEqual(105.40);
    expect(newBank.convertCurrency(100, "USD", "EUR")).toEqual(95);
    expect(newBank.convertCurrency(100, "EUR", "EUR")).toEqual(100);
  });

});