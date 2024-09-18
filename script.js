// Validação simples do formulário
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir envio padrão do formulário
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert('Obrigado por entrar em contato, ' + name + '! Retornaremos em breve.');
      document.getElementById('contactForm').reset(); // Limpar formulário
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  });
  
