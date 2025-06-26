import fetch from 'node-fetch';

async function testGemini() {
  try {
    console.log('Testing Gemini connection...');
    
    // Test the Gemini connection
    const response = await fetch('https://work-2-dtbjgljmimkwjebs.prod-runtime.all-hands.dev/test/gemini');
    const data = await response.json();
    
    console.log('Gemini test result:', data);
    
    if (data.status === 'success' && data.gemini.connected) {
      console.log('✅ Gemini connection test passed!');
      console.log('Model:', data.gemini.model);
      console.log('Voice:', data.gemini.voice);
      console.log('Language:', data.gemini.language);
    } else {
      console.log('❌ Gemini connection test failed!');
    }
    
    // Test the system
    const systemResponse = await fetch('https://work-2-dtbjgljmimkwjebs.prod-runtime.all-hands.dev/test/system');
    const systemData = await systemResponse.json();
    
    console.log('\nSystem test result:', systemData.overall_status);
    console.log('Score:', systemData.score);
    
    if (systemData.tests.gemini.status === 'pass') {
      console.log('✅ Gemini system test passed!');
      console.log('Message:', systemData.tests.gemini.message);
    } else {
      console.log('❌ Gemini system test failed!');
    }
    
  } catch (error) {
    console.error('Error testing Gemini:', error);
  }
}

testGemini();