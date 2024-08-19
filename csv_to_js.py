import pandas as pd
import json

# Load the CSV file with ISO-8859-1 encoding to avoid UnicodeDecodeError
csv_file_path = 'handheld.csv'  # Adjust the path as necessary
handhelds_df = pd.read_csv(csv_file_path, encoding='ISO-8859-1')

# Drop rows where all elements are NaN
handhelds_df.dropna(how='all', inplace=True)

# Replace NaN values in numeric columns with 0
numeric_columns = handhelds_df.select_dtypes(include='number').columns
handhelds_df[numeric_columns] = handhelds_df[numeric_columns].fillna(0)

# Replace NaN values in non-numeric columns with empty strings
non_numeric_columns = handhelds_df.select_dtypes(exclude='number').columns
handhelds_df[non_numeric_columns] = handhelds_df[non_numeric_columns].fillna('')

# Convert the DataFrame to the desired format
handhelds_data = handhelds_df.to_dict(orient='records')

# Convert the records to JSON-like string format
formatted_handhelds_data = [
    {key: row[key] for key in row}
    for row in handhelds_data
]

# Convert to JSON string format for better readability
json_formatted_handhelds_data = json.dumps(formatted_handhelds_data, indent=4)

# Save the JSON formatted data to a file
with open('handhelds_data.js', 'w') as f:
    f.write(f"const handhelds = {json_formatted_handhelds_data};")
