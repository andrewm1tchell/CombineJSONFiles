This JavaScript code reads JSON files from a specified directory and extracts specific fields from each file to create a new JSON array. It then writes this array to a specified output file.

To use this code, follow these steps:

1. Ensure you have Node.js installed on your machine.
2. Place your JSON files in a directory of your choice.
3. Update the `directory` variable in the code to point to your JSON files directory.
4. Ensure your JSON files are named sequentially from 1.json to N.json, where N is the total number of files.
5. Update the `filename` variable in the code to specify the output file name.
6. Adjust the field names (`hash`, `name`, `attributes`, etc.) in the code to match the structure of your JSON files.
7. Run the script using Node.js. The script will read each JSON file, extract the specified fields, and save them in the output file in JSON format.

Note: Make sure to customize the `directory`, `filename`, and field names according to your actual data structure.
