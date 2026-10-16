"""Apply a roster JSON export to the static site. No third-party packages needed.

Usage: python update_roster.py path/to/nwswtp-team-roster-edited.json
"""
import json
import sys
from pathlib import Path

root = Path(__file__).resolve().parent
if len(sys.argv) != 2:
    raise SystemExit('Usage: python update_roster.py <edited_roster.json>')
rows = json.loads(Path(sys.argv[1]).read_text(encoding='utf-8'))
if not isinstance(rows, list) or not rows:
    raise SystemExit('Roster must be a nonempty JSON list')
for i, row in enumerate(rows, start=1):
    if not isinstance(row, dict) or not all(isinstance(row.get(k), str) and row[k].strip() for k in ('name', 'role', 'category')):
        raise SystemExit(f'Profile {i} is missing a name, role, or category')
(root / 'team.json').write_text(json.dumps(rows, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')
(root / 'team-data.js').write_text('window.TEAM_DATA = ' + json.dumps(rows, indent=2, ensure_ascii=False) + ';\n', encoding='utf-8')
print(f'Updated {len(rows)} team profiles in team.json and team-data.js')
