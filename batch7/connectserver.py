import paramiko

# SSH connection details
hostname = '192.168.1.5'     # or IP address
port = 22
username = 'root'
password = 'cadd@123'       # Use key file for better security

# Create SSH client
client = paramiko.SSHClient()
client.set_missing_host_key_policy(paramiko.AutoAddPolicy())

try:
    # Connect to the server
    client.connect(hostname, port=port, username=username, password=password)

    # Run command to get processor info
    stdin, stdout, stderr = client.exec_command('sudo apt update && sudo apt upgrade')

    # Print output
    print("Processor Info:\n", stdout.read().decode())
    print("Error (if any):\n", stderr.read().decode())

except Exception as e:
    print("Connection failed:", str(e))

finally:
    client.close()
