function solve() {
  let text = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;

  let result;
  if (namingConvention === 'Camel Case') {
      result = text.toLowerCase().split(' ').map((word, index) => index !== 0 ? word[0].toUpperCase() + word.slice(1) : word).join('');
  } else if (namingConvention === 'Pascal Case') {
      result = text.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join('');
  } else {
      result = 'Error!';
  }

  document.getElementById('result').innerText = result;
}