import fs from 'fs';
import path from 'path';

const resultsDir = path.resolve(__dirname, 'allure-report');

interface Step {
  name: string;
  status: string;
}

interface TestMetadata {
  name: string;
  status: string;
  start: string;
  stop: string;
  steps: Step[];
}

function flattenSteps(steps: any[]): Step[] {
  let flattenedSteps: Step[] = [];
  
  steps.forEach(step => {
    flattenedSteps.push({
      name: step.name,
      status: step.status
    });

    // Flatten child steps if any
    if (step.steps && step.steps.length > 0) {
      flattenedSteps = flattenedSteps.concat(flattenSteps(step.steps));
    }
  });

  return flattenedSteps;
}

function parseAllureResults(): TestMetadata[] {
  const testFiles = fs.readdirSync(resultsDir).filter(file => file.endsWith('-result.json'));

  return testFiles.map(file => {
    const raw = fs.readFileSync(path.join(resultsDir, file), 'utf-8');
    const result = JSON.parse(raw);

    const steps: Step[] = result.steps ? flattenSteps(result.steps) : [];

    return {
      name: result.name,
      status: result.status,
      start: new Date(result.start).toISOString(),
      stop: new Date(result.stop).toISOString(),
      steps
    };
  });
}

// Example usage
const metadata = parseAllureResults();
console.log(JSON.stringify(metadata, null, 2));
