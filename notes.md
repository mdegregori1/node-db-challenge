## Table Details

project:
- id
- project_name (required)
- project_description
- completed (boolean, default to false, can't be null)

resource: 
- id
- resource_name (required)
- resource_description

_no duplicate names in resource_

project_resource:
- project_id
- resource_id

task:
- id
- task_description (required)
- task_notes
- project_id
- completed(boolean, default to false)