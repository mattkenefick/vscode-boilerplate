console.log('Foo bar');

// Test that directory variables work properly
// This will be used to test the fix for folder names with {filename} variables

${--
	variables.myVar = "My Name"
	variables.yourVar = "Your Name"
--}

${env.USER} : ${{ Date.now() }}

--------------------------------------------------------------------------------

Foo: ${foo}

MyVar: ${{ variables.myVar }}
YourVar: ${{ variables.yourVar }}

--------------------------------------------------------------------------------

Variables: ${{ JSON.stringify(variables) }}

${{ variables.package_version }}

WORKSPACE: ${{ workspaceRoot }}
INPUT: ${{ inputPath }}
OUTPUT: ${{ outputPath }}
INPUT RELATIVE: ${{ inputPathRelative }}
OUTPUT RELATIVE: ${{ outputPathRelative }}
INPUT FILENAME: ${{ inputFilename }}
OUTPUT FILENAME: ${{ outputFilename }}

${{
	const [major, minor, patch] = variables.package.version.split('.');
	`Major: ${major}\nMinor: ${minor}\nPatch: ${patch}`
}}

${{
	variables.package.author.indexOf('Kenefick') > -1
		? `It's Matt.`
		: 'It\'s someone else.'
}}
