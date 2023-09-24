const taxRates = {
    
  };
  
  const nhifRates = {

  };
  
  const nssfRate = 0.06; 
  
  function calculatePAYE(income) {

  }
  
  function calculateNHIF(income) {

  }
  
  function calculateNSSF(income) {

    return income * nssfRate;
  }
  
  
  function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const paye = calculatePAYE(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);
    const netSalary = grossSalary - paye - nhif - nssf;
  
    return {
      grossSalary,
      paye,
      nhif,
      nssf,
      netSalary,
    };
  }
  
  const basicSalary = 40000; 
  const benefits = 8000; 
  
  const result = calculateNetSalary(basicSalary, benefits);
















































































