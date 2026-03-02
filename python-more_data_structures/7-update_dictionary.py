cat > 7-update_dictionary.py << 'EOF'
#!/usr/bin/python3
def update_dictionary(a_dictionary, key, value):
    a_dictionary[key] = value
    return a_dictionary
EOF
